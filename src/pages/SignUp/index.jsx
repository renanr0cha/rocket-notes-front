import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { Background, Container, Form } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
  return(
    <Container>
      <Background />

      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"s
          type="text"
          icon={FiUser}
        />

        <Input 
          placeholder="E-mail"s
          type="text"
          icon={FiMail}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Cadastrar"/>

        <a href="#">Voltar para o Login</a>
      </Form>
    </Container>
  )
}