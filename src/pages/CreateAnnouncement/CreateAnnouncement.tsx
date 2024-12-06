import { Button, Checkbox, TextField } from "@mui/material"
import { useCreateAnnouncement } from "./hooks/use-create-announcement"
import { ChangeEvent, useEffect, useState } from "react";
import { NumericFormatPrice, PhoneNumber } from "../../components/utils";
import { AnnouncementType, User, UserType } from "../../types";

interface FormData {
    title: string
    description: string;
    phone: string;
    location: string;
    category: string;
    type: AnnouncementType | null
    price?: string
    user: User
  }

const CreateAnnouncement = () => {
    const userTypeKey = localStorage.getItem('userType');
    console.log(UserType[userTypeKey as keyof typeof UserType])
    const user = {
       id: Number(localStorage.getItem('id')),
       email: localStorage.getItem('email'),
       phone: localStorage.getItem('phone'),
       userType: UserType[userTypeKey as keyof typeof UserType],
       active: true
    }
   
    const [formData, setFormData] = useState<FormData>({
        title:'',
        description:'',
        phone:'',
        location: '',
        category: '',
        type: null,
        price: '',
        user: user
    });

    const { t, createAnnouncement, error } = useCreateAnnouncement(formData)

    const [isBuscaChecked, setIsBuscaChecked] = useState(false);
    const [isOfertaChecked, setIsOfertaChecked] = useState(false);
    const [renderPriceField, setRenderPriceField] = useState(false);
    const [renderErrorMessage, setRenderErrorMessage] = useState<JSX.Element | null>(null);


    useEffect(() => {
        if (error !== null) {
            const errorMessage = () => {
                return (
                    <>
                    <p className="text-red-600">Ocorreu um erro ao salvar o anúncio</p>
                    </>
                )
            }
            setRenderErrorMessage(errorMessage)
        }
    }, [error])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    

    const handleBuscaChange = () => {
      setIsBuscaChecked(true)
      setFormData((prev) => ({...prev, ['type']: AnnouncementType.BUSCA}))
      setRenderPriceField(false)
      if (isBuscaChecked) {
        setFormData((prev) => ({...prev, ['type']: null}))
        setIsBuscaChecked(false); 
      }
    };
  
    const handleOfertaChange = () => {
      setIsOfertaChecked(true)
      setFormData((prev) => ({...prev, ['type']: AnnouncementType.OFERTA}))
      setRenderPriceField(true)
      if (isOfertaChecked) {
        setIsOfertaChecked(false); 
        setFormData((prev) => ({...prev, ['type']: null}))
        setRenderPriceField(false)

      }
    }
  
    const priceField = () => {
        if (renderPriceField) {
            return (
                <>
                <div className="p-5">
                    <NumericFormatPrice handleChange={handleChange} value={formData.price} required label={t('preco')}/>
                </div>
                </>
            )
        }
    }

    return (
        <>
        <main className='mt-mili'>
            <div className="top-10 items-center relative flex flex-col">
                <h1 className="text-blue-800 font-extrabold">
                    {t('criacao.anuncio.title')}
                </h1>
            </div>
            <div className='mb-kilo flex items-center flex-col p-24'>
                {renderErrorMessage}
                <div className="p-5">
                    <TextField
                        required 
                        label={t('title')}
                        color="info"
                        onChange={handleChange}
                        value={formData.title}
                        name='title' />
                </div>
                <div className="p-5">
                    <TextField
                        required
                        onChange={handleChange} 
                        label={t('descricao.detalhada')}
                        color="info"
                        value={formData.description}
                        name='description'/>
                </div>

                <div className="p-5">
                    <PhoneNumber handleChange={handleChange} value={formData.phone} required label={t('info.contato')}/>
                </div>
                <div className="p-5">
                    <TextField
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        label={t('localizacao')}
                        color="info"
                    />
                </div>
                <div className="p-5">
                    <TextField
                        name="category"
                        onChange={handleChange}
                        value={formData.category}
                        required
                        label={t('categoria')}
                        color="info"
                    />
                </div>
                <div className="inline-block">
                    <div>
                        {t('busca.item')}
                        <Checkbox 
                            name="buscaItem"
                            value={formData.buscaItem}
                            required
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
                            name="ofertaItem"
                            value={formData.ofertaItem}
                            id="checkbox-oferta"
                            required
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
                            {t('criar.anuncio')}
                    </Button>
                </div>
            </div>
      </main>
      </>
    )
}

export default CreateAnnouncement
