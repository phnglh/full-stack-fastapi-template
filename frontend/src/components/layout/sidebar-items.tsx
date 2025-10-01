import { Link as RouterLink } from "@tanstack/react-router"
import { House, LayoutList, type LucideIcon, Settings } from "lucide-react"

interface SidebarItemsProps {
  onClose?: () => void
}

interface Item {
  icon: LucideIcon
  title: string
  path: string
}

const items: Item[] = [
  { icon: House, title: "Dashboard", path: "/" },
  { icon: LayoutList, title: "Products", path: "/admin/products" },
  { icon: Settings, title: "User Settings", path: "/admin/settings" },
]

const SidebarItems = ({ onClose }: SidebarItemsProps) => {
  return (
    <nav className="flex flex-col gap-1">
      {items.map(({ icon: Icon, title, path }) => (
        <RouterLink
          key={title}
          to={path}
          onClick={onClose}
          className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <Icon className="h-5 w-5" />
          <span>{title}</span>
        </RouterLink>
      ))}
    </nav>
  )
}

export default SidebarItems
