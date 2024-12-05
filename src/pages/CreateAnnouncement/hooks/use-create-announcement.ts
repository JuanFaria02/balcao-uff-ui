import { useState } from "react";
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom";

interface FormData {
  title: string;
  description: string;
  phone: string;
  location: string;
  category: string;
  buscaItem: boolean
  ofertaItem: boolean
  price?: string
}

export const useCreateAnnouncement = (formData: FormData) => {
    const { t } = useTranslation()
    const navigate = useNavigate()
  
    const token = localStorage.getItem('token') ?? ''
    const [error, setError] = useState(null)

    const createAnnouncement = async () => {
        fetch('http://localhost:8080/api/anuncio/criar', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': token},
          body: JSON.stringify(formData),
        })
          .then((response) => {
            if (response.status !== 201) {
              throw new Error('Created failed');
            }
            return response.json();
          })
          .then((data) => {
            console.log('Created announcement:', data);
            navigate("/anuncio/" + data.id)
          })
          .catch((error) => {
            console.error('Error:', error);
            setError(error)
          });
    }
  
    return {
      t,
      createAnnouncement,
      error
    }
  }
  