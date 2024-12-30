import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Modal, Box } from '@mui/material';
import { useAnnouncements } from './hooks/use-announcements';
import { Announcement } from '../../types';

const AnnouncementDetail = () => {
  const { fetchAnnouncementById, updateAnnouncement } = useAnnouncements();
  const { id } = useParams();
  
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [rating, setRating] = useState<number | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    const loadAnnouncement = async () => {
      try {
        const data = await fetchAnnouncementById(Number(id));
        console.log(data);
        setAnnouncement(data ?? null);
      } catch (err: any) {
        setError(err.message);
      }
    };
    loadAnnouncement(); 
  }, [id]);

  const handleSaveRating = async () => {
    if (rating === null || rating < 1 || rating > 5) {
      setError('Avaliação deve ser um número entre 1 e 5.');
      return;
    }
  
    try {
      const updatedData = { ...announcement, rating };
        await updateAnnouncement(announcement?.id ?? undefined, updatedData);
  
      setAnnouncement((prev) =>
        prev ? { ...prev, rating } : prev
      );
  
      setModal(false);
  
      setSuccessMessage('Avaliação salva com sucesso!');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (error: any) {
      console.error('Erro ao salvar avaliação:', error);
      setError('Erro ao salvar avaliação. Tente novamente.');
    }
  };
    return (
    <>
      <main className="mt-mili">
        <div>
          <Modal open={modal} onClose={() => setModal(false)}>
            <Box sx={{ width: 400, margin: '50px auto', padding: 3, background: 'white', borderRadius: 2 }}>
              <h1>Digite sua avaliação</h1>
              <input
                type="number"
                min="1"
                max="5"
                value={rating || ''}
                onChange={(e) => setRating(Number(e.target.value))}
                className="border p-2 rounded w-full"
              />
              <div className="flex justify-between mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleSaveRating}
                >
                  Salvar
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => setModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </Box>
          </Modal>

          <h1>Anúncio {announcement?.description}</h1>
          
          {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

          {announcement ? (
            <ul className="announcements-list">
              <li className="announcement-item border p-4 rounded shadow-md mb-4">
                <h3 className="text-lg font-bold">{announcement.title}</h3>
                <p className="text-gray-700">{announcement.description}</p>
                <p>
                  <span className="font-semibold">Categoria:</span> {announcement.category}
                </p>
                <p>
                  <span className="font-semibold">Localização:</span> {announcement.location}
                </p>
                <p>
                  <span className="font-semibold">Telefone:</span> {announcement.phone}
                </p>
                {announcement.price && (
                  <p>
                    <span className="font-semibold">Preço:</span> {announcement.price}
                  </p>
                )}
                <p>
                  <span className="font-semibold">Tipo:</span>{' '}
                  {announcement.type ? announcement.type : 'Não especificado'}
                </p>
                <p>
                  <span className="font-semibold">Usuário:</span> {announcement.user.name}
                </p>
                <div>
                  <div className="inline">
                    <p>
                      <span className="font-semibold">Avaliação do Anúncio:</span> {announcement.rating || 'Sem avaliação'}
                    </p>
                  </div>
                  <div className="inline">
                    <button
                      className="bg-blue-600 text-white font-bold inline relative left-[80%]" 
                      onClick={() => setModal(true)}
                    >
                      Avaliar Anúncio
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          ) : (
            <p>Carregando anúncio...</p>
          )}
        </div>
      </main>
    </>
  );
};

export default AnnouncementDetail;
