'use client';

import { LabelUI, DivForm, FormUI, InputUI, SubmitUI } from "@/components/UI/Forms";

export const RegisterForm = () => {

  return (
    <article className="">
      <h1 className="text-2xl font-bold mb-6 text-blue-900">Registro de Usuario</h1>
      <FormUI>
        <DivForm>
          <LabelUI htmlFor="name">Nombre Completo</LabelUI>
          <InputUI
            id="name"
            name="name"
            type="text"
            placeholder="Tu nombre completo"

            required
          />
        </DivForm>

        <DivForm>
          <LabelUI htmlFor="email">Correo Electrónico</LabelUI>
          <InputUI
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"

            required
          />
        </DivForm>

        <DivForm>
          <LabelUI htmlFor="password">Contraseña</LabelUI>
          <InputUI
            id="password"
            name="password"
            type="password"
            placeholder="******"

            required
            minLength={6}
          />
        </DivForm>

        <DivForm>
          <LabelUI htmlFor="confirmPassword">Confirmar Contraseña</LabelUI>
          <InputUI
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="******"
            

            required
            minLength={6}
          />
        </DivForm>

        <SubmitUI>Registar</SubmitUI>
      </FormUI>
    </article>
  );
};

export default RegisterForm;
