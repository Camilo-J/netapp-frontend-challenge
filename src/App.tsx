import { Root } from "@/pages/root";
import { Suspense } from "react";
import { useUserStore } from "./store/user.ts";
import { tryit } from "radashi";

function App() {
  const getUser = useUserStore((state) => state.getUser);
  const user = useUserStore((state) => state.user);

  const executeFunctions = async () => {
    if (!user) {
      const userId = sessionStorage.getItem("userId");
      if (userId) {
        const [error] = await tryit(getUser)(parseInt(userId));
        if (error) console.log("User not fetched");
        return { user };
      }
    }
    return { user };
  };

  return (
    <div>
      <Suspense fallback={<div>loading .....</div>}>
        <Root userResponse={executeFunctions()} />
      </Suspense>
    </div>
  );
}

export default App;
