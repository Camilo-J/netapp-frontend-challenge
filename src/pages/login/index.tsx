import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";
import { loginAction } from "./actions/login";

export function LoginPage() {
  const navigate = useNavigate();
  const [, action, isPending] = useActionState(loginAction(), { message: "" });

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
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input name="email" placeholder="example@mail.com" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  name="password"
                  type="password"
                  placeholder="**********"
                  required
                />
              </div>
            </div>
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
