import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Button } from "../../components/Button";

import { Input } from "../../components/Input";
import { Container, Form, Avatar } from "./styles";

export function Profile() {
  return(
    <Container>
      <header>
        <a href="#">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/renanr0cha.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              type="file"
              id="avatar"
            />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button>
          Salvar
        </Button>
      </Form>
    </Container>
  )
}