import Sidebar from "@/components/layout/admin/side-bar"
import { Flex } from "@chakra-ui/react"
import { createFileRoute, Outlet } from "@tanstack/react-router"


export const Route = createFileRoute("/admin")({
  component: Admin,
})

function Admin() {
  return (
    <Flex direction="column" h="100vh">
      <Flex flex="1" overflow="hidden">
        <Sidebar />
        <Flex flex="1" direction="column" p={4} overflowY="auto">
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  )
}

