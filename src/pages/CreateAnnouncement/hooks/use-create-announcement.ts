import { useTranslation } from "react-i18next"

export const useCreateAnnouncement = () => {
    const { t } = useTranslation()
  
    // TODO callback para post
    return {
      t
    }
  }
  