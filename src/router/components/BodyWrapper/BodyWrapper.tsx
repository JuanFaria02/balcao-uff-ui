import { Container } from '@mui/material'
import React from 'react'

const BodyWrapper = ({ children }: any) => {
  return (
    <Container
      className={'max-w-[1440px] flex flex-col px-4 w-[calc(100%-32px)] mx-auto rounded-none'}
    >
      {children}
    </Container>
  )
}

export default React.memo(BodyWrapper)
