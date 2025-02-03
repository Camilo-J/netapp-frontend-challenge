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
import { useNavigate } from "react-router";
import { Label } from "@/components/ui/label";
import { registerAction } from "./actions/register";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [, action, isPending] = useActionState(registerAction(), {
    message: "",
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
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nombres</Label>
                <Input name="name" placeholder="Pedro Juan" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="lastName">Apellidos</Label>
                <Input name="lastName" placeholder="Pérez Ramírez" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Usuario</Label>
                <Input name="username" placeholder="pedro123" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  name="password"
                  type="password"
                  placeholder="********"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  required
                />
              </div>
            </div>
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
