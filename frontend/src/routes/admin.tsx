import { createFileRoute, Outlet } from "@tanstack/react-router"
import Sidebar from "@/components/layout/admin/side-bar"

export const Route = createFileRoute("/admin")({
  component: Admin,
})

function Admin() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </main>
  )
}
