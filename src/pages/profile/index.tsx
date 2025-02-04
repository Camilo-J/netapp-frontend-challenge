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
import { updateUserAction } from "./actions/user";
import { CustomSidebar } from "@/components/organism/Sidebar";
import { useUserStore } from "@/store/user";
import { CustomInput } from "@/components/atoms/CustomInput";

export function ProfilePage() {
  const user = useUserStore((state) => state.user);
  const [, action, isPending] = useActionState(updateUserAction(), {
    message: "",
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
            <CardTitle>Perfil de Usuario</CardTitle>
            <CardDescription>Actualiza tus datos personales</CardDescription>
          </CardHeader>
          <CardContent>
            <section>
              <div className="grid w-full items-center gap-4">
                <CustomInput
                  id="name"
                  name="name"
                  placeholder="Pedro Juan"
                  defaultValue={user?.name || ""}
                  required={true}
                  label="Nombres"
                />
                <CustomInput
                  id="lastName"
                  name="lastName"
                  placeholder="Pérez Ramírez"
                  defaultValue={user?.lastName || ""}
                  required={true}
                  label="Apellidos"
                />
                <CustomInput
                  id="username"
                  name="username"
                  placeholder="pedro123"
                  defaultValue={user?.username || ""}
                  required={true}
                  label="Usuario"
                />
                <CustomInput
                  id="email"
                  name="email"
                  placeholder="example@mail.com"
                  defaultValue={user?.email || ""}
                  required={true}
                  disabled={true}
                  label="Correo electrónico"
                />
              </div>
            </section>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={isPending}>
              {isPending ? "Cargando..." : "Actualizar"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
