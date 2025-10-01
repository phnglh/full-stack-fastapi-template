import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/_auth/login")({
  component: Login,
})

function Login() {
  return (
    <>
      <Link to="/recover-password" className="main-link">
        Forgot Password?
      </Link>
      <Button variant="ghost" type="submit">
        Log In
      </Button>
      <p>
        Don't have an account?{" "}
        <Link to="/signup" className="main-link">
          Sign Up
        </Link>
      </p>
    </>
  )
}
