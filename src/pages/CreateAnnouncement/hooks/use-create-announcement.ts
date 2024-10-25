import { useTranslation } from "react-i18next"

export const useCreateAnnouncement = () => {
    const { t } = useTranslation()
  
    // TODO callback para post
    const createAnnouncement = () => {
      console.log("Req enviada")
    } 
    return {
      t,
      createAnnouncement
    }
  }
  