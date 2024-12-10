import { useAnnouncements } from "./hooks/use-announcements";

const Announcements = () => {
    const { announcements, error } = useAnnouncements();

    return (
      <>
        <main className="mt-mili">
          <div>
            <h1>Meus Anúncios</h1>
            {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
            <ul className="announcements-list">
              {announcements.map((announcement) => (
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
                </li>
              ))}
            </ul>
          </div>
        </main>
      </>
    );
  };
  

export default Announcements
