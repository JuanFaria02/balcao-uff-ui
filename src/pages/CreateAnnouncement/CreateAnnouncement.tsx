import { Button, Checkbox, TextField } from "@mui/material"
import { useCreateAnnouncement } from "./hooks/use-create-announcement"
import { useState } from "react";
import { NumericFormatPrice, PhoneNumber } from "../../components/utils";

const CreateAnnouncement = () => {
    const { t, createAnnouncement } = useCreateAnnouncement()

    const [isBuscaChecked, setIsBuscaChecked] = useState(false);
    const [isOfertaChecked, setIsOfertaChecked] = useState(false);
    const [renderPriceField, setRenderPriceField] = useState(false);

    const handleBuscaChange = () => {
      setIsBuscaChecked(true)
      setRenderPriceField(false)
      if (isBuscaChecked) {
        setIsBuscaChecked(false); 
      }
    };
  
    const handleOfertaChange = () => {
      setIsOfertaChecked(true)
      setRenderPriceField(true)
      if (isOfertaChecked) {
        setIsOfertaChecked(false); 
        setRenderPriceField(false)

      }
    }
  
    const priceField = () => {
        if (renderPriceField) {
            return (
                <>
                <div>
                    <NumericFormatPrice/>
                </div>
                </>
            )
        }
    }

    return (
        <>
        <main className='mt-mili'>
            <div className="pt-44 items-center relative flex flex-col">
                <h1 className="text-blue-800 font-extrabold">
                    Criação de Anúncio
                </h1>
            </div>
            <div className='mb-kilo flex items-center flex-col p-24'>
                <div className="p-5">
                    <TextField 
                        label="Descrição detalhada" 
                        color="info" />
                </div>

                <div className="p-5">
                    <PhoneNumber/>
                </div>
                <div className="p-5">
                    <TextField
                        label="Localização"
                        color="info"
                    />
                </div>
                <div className="p-5">
                    <TextField
                        label="Categoria"
                        color="info"
                    />
                </div>
                <div className="inline-block">
                    <div>
                        {t('busca.item')}
                        <Checkbox 
                            id="checkbox-busca"
                            color="info"
                            checked={isBuscaChecked}
                            onChange={handleBuscaChange}
                            disabled={isOfertaChecked}
                        />
                    </div>
                    <div>
                        {t('oferta.item')}
                        <Checkbox 
                            id="checkbox-oferta"
                            color="info"
                            checked={isOfertaChecked}
                            onChange={handleOfertaChange}
                            disabled={isBuscaChecked} 
                        />
                    </div>

                </div>
                {priceField()}
                
                <div className="p-5">
                    <Button 
                        variant="contained"
                        color="info" 
                        onClick={createAnnouncement}>
                            Criar Anúncio
                    </Button>
                </div>
            </div>
      </main>
      </>
    )
}

export default CreateAnnouncement
