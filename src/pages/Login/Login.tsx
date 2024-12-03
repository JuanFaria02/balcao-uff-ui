import React, { useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useLogin } from './hooks/use-login';

interface FormData {
  email: string;
  senha: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', senha: '' });
  const { t, handleLogin } = useLogin(formData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="mt-mili">
      <div className="pt-44 items-center relative flex flex-col">
        <h1 className="text-blue-800 font-extrabold">{t('login')}</h1>
      </div>
      <div className="mb-kilo flex items-center flex-col p-24">
        <div className="p-5">
          <TextField
            required
            label={t('email')}
            name="email"
            value={formData.email}
            onChange={handleChange}
            color="info"
            placeholder="usuario@gmail.com"
          />
        </div>
        <div className="p-5">
          <TextField
            required
            label={t('senha')}
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            color="info"
            type="password"
          />
        </div>
        <div className="p-5">
          <Button variant="contained" color="info" onClick={handleLogin}>
            {t('login')}
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Login;
