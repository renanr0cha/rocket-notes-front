import { Container, Profile } from "./styles";

export function Header() {
  return(
    <Container>
      <Profile>
        <img
          src="https://github.com/renanr0cha.png"
          alt="Foto do usuário"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Renan Rocha</strong>
        </div>
      </Profile>
    </Container>
  )
}