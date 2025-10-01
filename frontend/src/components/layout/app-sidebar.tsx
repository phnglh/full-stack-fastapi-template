import { Link } from "@tanstack/react-router"
import type { LucideIcon } from "lucide-react"
import {
  Calendar,
  House,
  LayoutList,
  Settings,
  TextAlignJustify,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

interface SidebarItem {
  icon: LucideIcon
  title: string
  path: string
}

interface SidebarGroupData {
  title: string
  items: SidebarItem[]
}

const sidebarData: SidebarGroupData[] = [
  {
    title: "",
    items: [{ icon: House, title: "Tổng quan", path: "/" }],
  },
  {
    title: "Đào tạo",
    items: [
      { icon: Calendar, title: "Quản lý ca", path: "/schedule" },
      { icon: LayoutList, title: "Lịch học", path: "/" },
      { icon: Settings, title: "Bài tập", path: "/" },
    ],
  },
  {
    title: "Hồ sơ",
    items: [
      { icon: House, title: "Thông tin cá nhân", path: "/" },
      { icon: Settings, title: "Cài đặt", path: "/" },
    ],
  },
]

const AppSidebar = () => {
  return (
    <>
      <SidebarTrigger className="md:hidden absolute">
        <TextAlignJustify />
      </SidebarTrigger>

      <Sidebar>
        <SidebarContent>
          {sidebarData.map((group) => (
            <SidebarGroup key={group.title} className="p-1 mb-0">
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              <SidebarMenu>
                {group.items.map(({ icon: Icon, title, path }) => (
                  <SidebarMenuItem key={title}>
                    <SidebarMenuButton asChild>
                      <Link to={path} className="flex items-center">
                        <Icon />
                        {title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>
    </>
  )
}

export default AppSidebar
