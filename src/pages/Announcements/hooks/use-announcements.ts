import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react";
import { Announcement } from "../../../types";



export const useAnnouncements = () => {
    const { t } = useTranslation()
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const announcements = await fetchAnnouncements();
        setAnnouncements(announcements); 
      };
    
      fetchData();
    }, []);
    

    const token = localStorage.getItem('token') ?? ''
    const [error, setError] = useState(null)

    const fetchAnnouncements = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/anuncios', {
          method: 'GET',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': token
          },
        });
    
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    
        const data = await response.json();
        console.log('Fetched Announcements:', data);
        return data;
      } catch (error) {
        console.error('Error fetching announcements:', error);
        setError(error); 
      }
    };

    const fetchAnnouncementById = async (id: number): Promise<Announcement | undefined> => {
        try {
            const response = await fetch(`http://localhost:8080/api/anuncio/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data: Announcement = await response.json();
            console.log('Fetched Announcement:', data);
            return data;
        } catch (error) {
            console.error('Error fetching announcement:', error);
            setError(error.message);
            throw error;
        }
    };

    const updateAnnouncement = async (
        id: number | undefined,
        updatedAnnouncement: Announcement
    ) => {
        try {
            const response = await fetch(`http://localhost:8080/api/anuncio/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedAnnouncement)
            });

            if (!response.ok) {
                throw new Error(`Erro: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Anúncio atualizado:', data);

            return data;
        } catch (error: any) {
            console.error('Erro ao atualizar o anúncio:', error);
            throw error;
        }
    };

    return {
      t,
      fetchAnnouncements,
      updateAnnouncement,
      fetchAnnouncementById,
      error,
      announcements
    }
  }