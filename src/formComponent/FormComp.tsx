import { Button, Form, TextArea, TextInput } from "carbon-components-react";
import emailjs from "emailjs-com";
interface Props {
  isFrenchToggled: boolean;
}
export const FormComp = ({ isFrenchToggled }: Props) => {
  const onSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c7ms675--------",
        "template_KH2WrD2t",
        e.target,
        "user_CJZgaIrB2PrfSnYBMoukb"
      )
      .then(
        (res: any) => console.log(res.text),
        (error: any) => console.log(error.tex)
      );
    e.target.reset();
  };

  return (
    <Form onSubmit={onSubmit}>
      <div style={{ marginBottom: "2rem" }}>
        <TextInput
          name="first_name"
          helperText="Nombre"
          id="test2"
          invalidText="Nombre no ingresado"
          labelText="Nombre"
          placeholder="Su nombre"
        />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <TextInput
          name="last_name"
          helperText="Ingrese su apellido"
          id="test2"
          invalidText="Ningun apellido ingresado"
          labelText="Apellido"
          placeholder="Apellido"
        />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <TextArea
          name="message"
          cols={50}
          helperText="Maximo 100 caracteres"
          id="test5"
          invalidText="Mensaje invalido"
          labelText="Message"
          placeholder="Por favor ingrese su mensaje"
          rows={4}
        />
      </div>

      <Button
        style={{ float: "left" }}
        kind="primary"
        tabIndex={0}
        type="submit"
      >
        Enviar
      </Button>
      <br />
    </Form>
  );
};
