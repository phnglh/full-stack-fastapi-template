import { Container, Text } from "@chakra-ui/react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/_auth/login")({
  component: Login,
})

function Login() {
  return (
    <Container>
      <Link to="/recover-password" className="main-link">
        Forgot Password?
      </Link>
      <Button variant="solid" type="submit" size="md">
        Log In
      </Button>
      <Text>
        Don't have an account?{" "}
        <Link to="/signup" className="main-link">
          Sign Up
        </Link>
      </Text>
    </Container>
  )
}
