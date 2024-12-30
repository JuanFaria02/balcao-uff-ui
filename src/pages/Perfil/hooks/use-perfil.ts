import { useTranslation } from "react-i18next"
import { useState } from "react";
import { User } from "../../../types";



export const usePerfil = () => {
    const { t } = useTranslation()    

    const token = localStorage.getItem('token') ?? ''
    const [error, setError] = useState(null)


    const fetchUserById = async (id: number): Promise<User | undefined> => {
        try {
            const response = await fetch(`http://localhost:8080/api/user/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data: User = await response.json();
            console.log('Fetched Announcement:', data);
            return data;
        } catch (error) {
            console.error('Error fetching announcement:', error);
            setError(error.message);
            throw error;
        }
    };

    const updateUser = async (
        id: number | undefined,
        updateUser: User
    ) => {
        try {
            const response = await fetch(`http://localhost:8080/api/user/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updateUser)
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
      fetchUserById,
      updateUser,
      error
    }
  }