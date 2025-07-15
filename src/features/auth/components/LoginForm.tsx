'use client';

import { LabelUI, DivForm, FormUI, InputUI, SubmitUI } from "@/components/UI/Forms";

export const LoginForm = () => {

  return (
    <article className="">
      <h1 className="text-2xl font-bold mb-6 text-blue-900">Iniciar Sesión</h1>
      <FormUI>
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

        <SubmitUI>Login</SubmitUI>
      </FormUI>
    </article>
  );
};

export default LoginForm;
