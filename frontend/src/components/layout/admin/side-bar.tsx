import { useState } from "react"
import SidebarItems from "@/components/layout/admin/sideibar-items"
import { Button } from "@/components/ui"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <DropdownMenu open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DropdownMenuTrigger asChild>
          {/* <Button
            variant="ghost"
            color="inherit"
            aria-label="Open Menu"
          >
            <TextAlignJustify />
          </Button> */}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuContent>
            <main className="flex justify-between">
              <div>
                <SidebarItems onClose={() => setOpen(false)} />
                <Button onClick={() => {}}>
                  <span>Log Out</span>
                </Button>
              </div>
            </main>
          </DropdownMenuContent>
        </DropdownMenuContent>
      </DropdownMenu>

      <div
        className="
    hidden md:flex
    sticky top-0
    min-w-[20rem] h-screen
    bg-gray-50 dark:bg-gray-900
    p-4
  "
      >
        <div className="w-full">
          <SidebarItems />
        </div>
      </div>
    </>
  )
}

export default Sidebar
