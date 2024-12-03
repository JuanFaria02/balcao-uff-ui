import { useTranslation } from 'react-i18next';

interface FormData {
  email: string;
  senha: string;
}

interface UseLoginReturn {
  t: (key: string) => string;
  handleLogin: () => void;         
}

export const useLogin = (formData: FormData): UseLoginReturn => {
  const { t } = useTranslation();

  const handleLogin = async () => {
    if (formData.email && formData.senha) {
      fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Login failed');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Login successful:', data);
          localStorage.setItem("token", data.token)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }

  return {
    t,
    handleLogin,
  };
};
