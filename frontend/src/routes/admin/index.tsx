import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/admin/")({
  component: Dashboard,
})

function Dashboard() {
  return (
    <>
          Hi, admin
        <span>Welcome back, nice to see you again!</span>
    </>
  )
}
