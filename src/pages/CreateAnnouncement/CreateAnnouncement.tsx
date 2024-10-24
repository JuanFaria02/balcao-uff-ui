import { useCreateAnnouncement } from "./hooks/use-create-announcement"

const CreateAnnouncement = () => {
    const { t } = useCreateAnnouncement()

    return (
        <>
        <main className='mt-mili'>
        <div className='mb-kilo flex items-center justify-between'>
            {/* TODO Criar campos para o cadastro dos anúncios */}
        </div>
      </main>
      </>
    )
}

export default CreateAnnouncement
