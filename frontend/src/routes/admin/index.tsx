import { Box, Container, Text } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"


export const Route = createFileRoute("/admin/")({
  component: Dashboard,
})

function Dashboard() {

  return (
    <Container maxW="full">
      <Box pt={12} m={4}>
        <Text fontSize="2xl" truncate maxW="sm">
          Hi,  admin
        </Text>
        <Text>Welcome back, nice to see you again!</Text>
      </Box>
    </Container>
  )
}
