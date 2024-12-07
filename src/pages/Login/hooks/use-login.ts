import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../router/Auth/auth';

interface FormData {
  email: string;
  password: string;
}

interface UseLoginReturn {
  t: (key: string) => string;
  handleLogin: () => void;         
}

export const useLogin = (formData: FormData): UseLoginReturn => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    if (formData.email && formData.password) {
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
          localStorage.setItem("id", data.userDto.id)
          localStorage.setItem("email", data.userDto.email)
          localStorage.setItem("phone", data.userDto.phone)
          localStorage.setItem("userType", data.userDto.userType)
          localStorage.setItem("active", data.userDto.active)

          login()
          navigate("/forms/anuncio")
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
