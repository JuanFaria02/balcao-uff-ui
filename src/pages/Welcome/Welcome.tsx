import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
  
    const handleClick = (path: string) => navigate(path);
  
  
    return (
        <div className="relative top-10">
            <h1 className="font-bold text-blue-700">Bem-vindos ao sistema de anúncios da UFF</h1>
            <div className="justify-self-center relative top-10">
                <button 
                    onClick={() => handleClick("/login")} 
                    className="bg-blue-900 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800 transition relative right-5">
                    {t('login')}
                </button>
                <button 
                    onClick={() => handleClick("/register")} 
                    className="bg-blue-900 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800 transition">
                    {t('register')}
                </button>
            </div>
        </div>
    );    
};

export default React.memo(Welcome);
