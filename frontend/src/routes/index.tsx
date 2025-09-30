import { createFileRoute } from "@tanstack/react-router"
import ThemeSwitcher from "@/components/common/theme-switcher"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div className="">
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
