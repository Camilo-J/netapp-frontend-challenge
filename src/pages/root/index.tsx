import { Navigate, Route, Routes } from "react-router";
import { LoginPage } from "@/pages/login";
import { useUserStore } from "@/store/user.ts";
import { use } from "react";
import RegisterPage from "../register";

interface Props {
  userResponse: Promise<unknown>;
}

export function Root({ userResponse }: Props) {
  use(userResponse);
  const user = useUserStore((state) => state.user);

  return (
    <Routes>
      {!user && <Route index path="/login" element={<LoginPage />} />}
      {!user && (
        <>
          <Route path="/">
            <Route index element={<Navigate to="/login" />} />
            <Route index path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Route>
        </>
      )}
      {user && <Route path="*" element={<LoginPage />} />}
    </Routes>
  );
}
