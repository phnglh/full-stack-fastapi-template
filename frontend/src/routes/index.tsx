import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div className="space-y-1">
      <p className="text-2xl font-semibold truncate max-w-sm">Hi, admin 👋🏼</p>
      <p className="text-base text-muted-foreground">
        Welcome back, nice to see you again!
      </p>
    </div>
  )
}
