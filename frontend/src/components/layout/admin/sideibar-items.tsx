import { Box, Flex, Icon, Text } from "@chakra-ui/react"
import { Link as RouterLink } from "@tanstack/react-router"

import { House, LayoutList, Settings, type LucideIcon } from "lucide-react"

interface SidebarItemsProps {
  onClose?: () => void
}

interface Item {
  icon: LucideIcon
  title: string
  path: string
}

const items: Item[] = [
  { icon: House, title: "Dashboard", path: "/dashboard" },
  { icon: LayoutList, title: "Products", path: "/products" },
  { icon: Settings, title: "User Settings", path: "/settings" },
]

const SidebarItems = ({ onClose }: SidebarItemsProps) => {
  const listItems = items.map(({ icon, title, path }) => (
    <RouterLink key={title} to={path} onClick={onClose}>
      <Flex
        gap={4}
        px={4}
        py={2}
        _hover={{
          background: "gray.subtle",
        }}
        alignItems="center"
        fontSize="sm"
      >
        <Icon as={icon} alignSelf="center" />
        <Text ml={2}>{title}</Text>
      </Flex>
    </RouterLink>
  ))

  return (
    <>
      <Text fontSize="xs" px={4} py={2} fontWeight="bold">
        Menu
      </Text>
      <Box>{listItems}</Box>
    </>
  )
}

export default SidebarItems
