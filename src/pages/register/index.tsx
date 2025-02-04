import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useNavigate } from "react-router";
import { registerAction } from "./actions/register";
import { CustomInput } from "@/components/atoms/CustomInput";
import { ErrorText } from "@/components/atoms/ErrorText";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [state, action, isPending] = useActionState(registerAction(), {
    message: "",
    lastName: "",
    name: "",
    username: "",
    email: "",
    password: "",
  });

  return (
    <form
      className="flex justify-center items-center min-h-screen bg-gray-100"
      action={action}
    >
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Registro</CardTitle>
          <CardDescription>Crea tu cuenta para comenzar</CardDescription>
        </CardHeader>
        <CardContent>
          <section>
            <div className="grid w-full items-center gap-4">
              <CustomInput
                name="name"
                placeholder="Pedro Juan"
                defaultValue={state.name}
                required
                label="Nombres"
              />
              <CustomInput
                name="lastName"
                placeholder="Pérez Ramírez"
                defaultValue={state.lastName}
                required
                label="Apellidos"
              />
              <CustomInput
                name="username"
                placeholder="pedro123"
                defaultValue={state.username}
                required
                label="Usuario"
              />
              <CustomInput
                name="password"
                placeholder="********"
                defaultValue={state.password}
                required
                label="Contraseña"
              />

              <CustomInput
                name="email"
                placeholder="example@mail.com"
                defaultValue={state.email}
                required
                label="Correo electrónico"
              />
            </div>
            <ErrorText message={state.message} />
          </section>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => navigate("/login")}>
            Cancelar
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Cargando..." : "Registrarse"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
