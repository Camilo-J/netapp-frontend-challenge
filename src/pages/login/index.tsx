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
import { loginAction } from "./actions/login";
import { ErrorText } from "@/components/atoms/ErrorText";
import { CustomInput } from "@/components/atoms/CustomInput";

export function LoginPage() {
  const navigate = useNavigate();
  const [state, action, isPending] = useActionState(loginAction(), {
    message: "",
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
          <CardTitle>Iniciar Sesión</CardTitle>
          <CardDescription>
            Ingresa tus credenciales para continuar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <section>
            <div className="grid w-full items-center gap-4">
              <CustomInput
                id="email"
                name="email"
                type="email"
                placeholder="example@mail.com"
                defaultValue={state.email || ""}
                label="Correo Electrónico"
                required
              />
              <CustomInput
                id="password"
                name="password"
                type="password"
                placeholder="**********"
                defaultValue={state.password || ""}
                label="Contraseña"
                required
              />
            </div>
            <ErrorText message={state.message} />
          </section>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => navigate("/register")}>
            Registrarse
          </Button>
          <Button disabled={isPending} type="submit">
            {isPending ? "Cargando..." : "Iniciar Sesión"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
