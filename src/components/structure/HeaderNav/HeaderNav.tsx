import { AppBar, Container, Toolbar } from "@mui/material"
import React from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import IconUff from "../../icons/icons"

const HeaderNav = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleClick = (path: string) => {
    navigate(path)
  }

  return (
        <>
        <AppBar color='inherit' position='fixed' className='h-28'>
          <Container className='pl-7 pt-6 absolute min-w-full'>
            <IconUff styles='absolute'/>
              <Toolbar className='justify-end'>
                <a className='pl-5 font-bold relative right-28 text-blue-700 no-underline cursor-pointer hover:text-black' 
                  onClick={() => handleClick('/forms/anuncio')}
                >
                  {t('criar.anuncio')}
                </a>

                <a className='pl-7 font-bold relative right-28 text-blue-700 no-underline cursor-pointer hover:text-black' 
                  onClick={() => handleClick('/anuncios')}
                >
                  {t('anuncios')}
                </a>

                <a className='pl-7 font-bold relative right-28 text-blue-700 no-underline cursor-pointer hover:text-black' 
                  onClick={() => handleClick('/')}
                >
                  {t('logout')}
                </a>
              </Toolbar>
          </Container>
        </AppBar>
        </>
      )
}

export default React.memo(HeaderNav);