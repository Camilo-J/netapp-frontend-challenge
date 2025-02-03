import { Command } from "lucide-react";
import { NavMain } from "@/components/molecules/NavMain";
import { NavUser } from "@/components/molecules/NavUser";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SearchForm } from "@/components/molecules/SearchForm";
import { Link } from "react-router";
import { ComponentProps, useActionState } from "react";
import { searchPhotosAction } from "@/pages/home/actions/photos";
import { useUserStore } from "@/store/user";

export function CustomSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const user = useUserStore((state) => state.user);
  const [, action] = useActionState(searchPhotosAction(), { message: "" });

  return (
    <Sidebar variant="sidebar" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/home">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Image Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm action={action} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
