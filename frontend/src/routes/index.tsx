import ThemeSwitcher from "@/components/common/theme-switcher";
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div className="">
     <div>
      <ThemeSwitcher/>
    </div>
    </div>
  )
}
