import { Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";
import { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { usePhotoStore } from "@/store/photo";
import { useLocation } from "react-router";

export function SearchForm({ ...props }: ComponentProps<"form">) {
  const { pending } = useFormStatus();
  const searchTerm = usePhotoStore((state) => state.searchTerm);
  const location = useLocation();
  const setSearchTerm = usePhotoStore((state) => state.setSearchTerm);

  return (
    <form {...props}>
      <SidebarGroup className="py-0 ">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search the Images..."
            className="pl-8"
          />
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </SidebarGroupContent>

        <Button
          disabled={pending || location.pathname !== "/home"}
          type="submit"
          className="w-full mt-4"
        >
          {pending ? "Loading..." : "Search"}
        </Button>
      </SidebarGroup>
    </form>
  );
}
