import * as S from './Sidebar.styled'

type Props = {
  isOpen: boolean
}

export const Sidebar = ({isOpen}:Props) => {
  if(isOpen)
  return (
    <>
      <S.Container>
        <S.Wopper>
          <button>botão</button>
          <button>botão</button>
          <button>botão</button>
        </S.Wopper>
      </S.Container>
    </>
  )
}
