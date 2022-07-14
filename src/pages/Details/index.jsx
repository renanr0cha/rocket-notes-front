import { Container, Links } from "./styles"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {
  return(
    <Container>
      <Header />

      <ButtonText title="Excluir nota">
        
      </ButtonText>

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="http://">Link 1</a>
          </li>
          <li></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="Express"></Tag>
        <Tag title="Node"></Tag>
      </Section>
      <Button title="Entrar" />
    </Container>
  )
}
