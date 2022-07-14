import { Container, Links, Content } from "./styles"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota"></ButtonText>

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatum minima accusantium placeat facilis rem quasi,
            animi ipsam ad commodi soluta ea architecto, et nemo illo
            id culpa hic, iure cum! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Voluptatum minima accusantium placeat 
            facilis rem quasi, animi ipsam ad commodi soluta ea architecto,
            et nemo illo id culpa hic, iure cum!
          </p>

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
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
