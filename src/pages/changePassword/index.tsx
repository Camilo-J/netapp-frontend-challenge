import { CustomInput } from "@/components/atoms/CustomInput";
import { CustomSidebar } from "@/components/organism/Sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useActionState } from "react";
import { changePasswordAction } from "./actions/password";
import { ErrorText } from "@/components/atoms/ErrorText";

export function ChangePasswordPage() {
  const [state, action, isPending] = useActionState(changePasswordAction(), {
    message: "",
    password: "",
    newPassword: "",
  });

  return (
    <div className="flex h-screen">
      <CustomSidebar />
      <form
        className="w-full flex justify-center items-center bg-gray-100"
        action={action}
      >
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Cambiar Contraseña</CardTitle>
            <CardDescription>
              Actualiza tu contraseña para mantener tu cuenta segura
            </CardDescription>
          </CardHeader>
          <CardContent>
            <section>
              <div className="grid w-full items-center gap-4">
                <CustomInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  required={true}
                  defaultValue={state.password}
                  label="Contraseña Actual"
                />
                <CustomInput
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  placeholder="********"
                  defaultValue={state.newPassword}
                  required={true}
                  label="Nueva Contraseña"
                />
              </div>
              <ErrorText message={state.message} />
            </section>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={isPending}>
              {isPending ? "Cargando..." : "Actualizar Contraseña"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
