import * as S from './styles'

export function Main() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e 'React Avançado' escrito ao lado"
      />
      <S.Title>React avançado</S.Title>
      <S.Description>ReactJs, NextJs e Styled Components</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Desenvolvedor de frente pra tela com código"
      />
    </S.Wrapper>
  )
}
