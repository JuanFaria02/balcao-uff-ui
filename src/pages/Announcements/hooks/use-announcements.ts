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
        return data; // Retorna os dados se necessário
      } catch (error) {
        console.error('Error fetching announcements:', error);
        setError(error); 
      }
    };
    

    return {
      t,
      fetchAnnouncements,
      error,
      announcements
    }
  }