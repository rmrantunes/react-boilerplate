import * as S from './styles'

export type MainProps = {
  title?: string
  description?: string
}

export function Main(props: MainProps) {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e 'React Avançado' escrito ao lado"
      />
      <S.Title>{props.title || 'React avançado'}</S.Title>
      <S.Description>
        {props.description || 'ReactJs, NextJs e Styled Components'}
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Desenvolvedor de frente pra tela com código"
      />
    </S.Wrapper>
  )
}
