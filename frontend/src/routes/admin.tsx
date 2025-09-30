import { createFileRoute, Outlet } from "@tanstack/react-router"
import Sidebar from "@/components/layout/app-sidebar"

export const Route = createFileRoute("/admin")({
  component: Admin,
})

function Admin() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
