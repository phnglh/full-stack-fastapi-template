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
  { icon: House, title: "Dashboard", path: "/admin" },
  { icon: LayoutList, title: "Products", path: "/admin/products" },
  { icon: Settings, title: "User Settings", path: "/admin/settings" },
]

const SidebarItems = ({ onClose }: SidebarItemsProps) => {
  const listItems = items.map(({ icon: Icon, title, path }) => (
    <RouterLink
      key={title}
      to={path}
      onClick={onClose}
      className="flex items-center gap-4 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
    >
      <Icon className="h-5 w-5" />
      <span>{title}</span>
    </RouterLink>
  ))

  return <div className="flex flex-col space-y-1">{listItems}</div>
}

export default SidebarItems
