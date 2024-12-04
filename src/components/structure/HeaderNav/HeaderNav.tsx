import { AppBar, Container, Toolbar } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import IconUff from '../../icons/icons';
import { useAuth } from '../../../router/Auth/auth';

const HeaderNav: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { logged, logout } = useAuth();

  const handleClick = (path: string) => navigate(path);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/")
    logout();
  };
  

  const renderOptions = () => {
    if (logged) {
      return (
        <Toolbar className="justify-end">
          <a
            className="pl-5 font-bold relative right-28 text-blue-700 no-underline cursor-pointer hover:text-black"
            onClick={() => handleClick('/forms/anuncio')}
          >
            {t('criar.anuncio')}
          </a>
          <a
            className="pl-7 font-bold relative right-28 text-blue-700 no-underline cursor-pointer hover:text-black"
            onClick={() => handleClick('/anuncios')}
          >
            {t('anuncios')}
          </a>
          <a
            className="pl-7 font-bold relative right-28 text-blue-700 no-underline cursor-pointer hover:text-black"
            onClick={() => handleClick('/perfil')}
          >
            {t('perfil')}
          </a>
          <a
            className="pl-7 font-bold relative right-28 text-blue-700 no-underline cursor-pointer hover:text-black"
            onClick={handleLogout}
          >
            {t('logout')}
          </a>
        </Toolbar>
      );
    }
    return null;
  };

  return (
    <>
      <AppBar color="inherit" position="sticky" className="h-28 top-0">
        <Container className="pl-7 pt-6 fixed min-w-full">
          <IconUff styles="absolute" />
          {renderOptions()}
        </Container>
      </AppBar>
    </>
  );
};

export default React.memo(HeaderNav);
