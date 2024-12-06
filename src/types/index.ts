export type CustomIcon = {
    styles: string
  }

export type User = {
  id: number | null,
  email?: string | null,
  phone?: string | null,
  userType?: UserType | null,
  active?: boolean | null
}

export enum UserType {
  ADMIN = 'ADMIN',
  PROFESSOR = 'PROFESSOR',
  ALUNO = 'ALUNO',
  UNDEFINED = 'UNDEFINED'
}


export enum AnnouncementType {
  OFERTA = 'OFERTA',
  BUSCA = 'BUSCA'
}