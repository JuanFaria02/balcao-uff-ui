import { Button, TextField } from "@mui/material"
import { ChangeEvent, useEffect, useState } from "react";
import { PhoneNumber } from "../../components/utils";
import { UserType } from "../../types";
import { usePerfil } from "./hooks/use-perfil";

interface FormData {
    id: number | null,
    email: string;
    name: string;
    phone: string;
    userType: UserType | null;
    active: boolean;
}

const Perfil = () => {
    const userId = Number(localStorage.getItem('id'));
    const [formData, setFormData] = useState<FormData>({
        id: null,
        email: '',
        name: '',
        phone: '',
        userType: null,
        active: true
    });

    const { t, fetchUserById, updateUser, error } = usePerfil();

    const [renderErrorMessage, setRenderErrorMessage] = useState<JSX.Element | null>(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const user = await fetchUserById(userId);
                if (user) {
                    setFormData({
                        id: user.id || null,
                        email: user.email || '',
                        name: user.name || '',
                        phone: user.phone || '',
                        userType: user.userType || null,
                        active: user.active || true
                    });
                }
            } catch (error) {
                console.error("Failed to load user data", error);
            }
        };
        loadUser();
    }, [userId]);

        useEffect(() => {
        if (error !== null) {
            setRenderErrorMessage(
                <p className="text-red-600">Ocorreu um erro ao salvar as alterações do usuário</p>
            );
        }
    }, [error]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        try {
            await updateUser(userId, formData);
            alert(t('usuario.atualizado.sucesso'));
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
        }
    };

    return (
        <>
        <main className='mt-mili'>
            <div className="top-10 items-center relative flex flex-col">
                <h1 className="text-blue-800 font-extrabold">
                    {t('perfil.title')}
                </h1>
            </div>
            <div className='mb-kilo flex items-center flex-col p-24'>
                {renderErrorMessage}
                <div className="p-5">
                    <TextField
                        required 
                        label={t('email')}
                        color="info"
                        onChange={handleChange}
                        value={formData.email}
                        name='email' />
                </div>
                <div className="p-5">
                    <TextField
                        required 
                        label={t('name')}
                        color="info"
                        onChange={handleChange}
                        value={formData.name}
                        name='name' />
                </div>

                <div className="p-5">
                    <PhoneNumber handleChange={handleChange} value={formData.phone} required label={t('info.contato')}/>
                </div>
                <div className="p-5">
                    <TextField
                        name="userType"
                        disabled
                        value={formData.userType || ''}
                        onChange={handleChange}
                        required
                        label={t('tipo.usuario')}
                        color="info"
                    />
                </div>
                <div className="p-5">
                    <Button 
                        variant="contained"
                        color="info" 
                        onClick={handleSave}> 
                        {t('salvar.alteracoes')}
                    </Button>
                </div>
            </div>
      </main>
      </>
    );
}

export default Perfil;
