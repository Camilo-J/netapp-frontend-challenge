import { ChevronRight, ImageUpscale } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { RadioButton } from "@/components/atoms/RadioButton";
import { usePhotoStore } from "@/store/photo";

const OrientationData = {
  title: "Orientation",
  options: [{ title: "Landscape" }, { title: "Portrait" }, { title: "Square" }],
};

export function NavMain() {
  const setPhotos = usePhotoStore((state) => state.setPhotos);
  const queryTerm = usePhotoStore((state) => state.searchTerm);
  const handleChange = async (value: string) => {
    if (!value) return;

    await setPhotos(
      `${queryTerm ? `query=${queryTerm}&` : ""}orientation=${value}`
    );
  };
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Filters</SidebarGroupLabel>
      <SidebarMenu>
        <Collapsible key={OrientationData.title} asChild defaultOpen={true}>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a>
                <ImageUpscale />
                <span>{OrientationData.title}</span>
              </a>
            </SidebarMenuButton>
            {OrientationData.options.length ? (
              <>
                <CollapsibleTrigger asChild>
                  <SidebarMenuAction className="data-[state=open]:rotate-90">
                    <ChevronRight />
                    <span className="sr-only">Toggle</span>
                  </SidebarMenuAction>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {OrientationData.options.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <RadioButton
                            id={OrientationData.title.toLowerCase()}
                            name={OrientationData.title.toLowerCase()}
                            label={subItem.title}
                            value={subItem.title}
                            onChange={(value) => handleChange(value)}
                          />
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </>
            ) : null}
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
}
