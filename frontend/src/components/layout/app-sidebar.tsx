import { TextAlignJustify } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SidebarItems from "./sidebar-items"

const AppSideBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="justify-start md:hidden" asChild>
          <Button type="button" variant="ghost" aria-label="Open Menu">
            <TextAlignJustify />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-72 p-4">
          <SheetHeader>
            <SheetTitle />
            <SheetDescription />
          </SheetHeader>

          <div className="flex flex-col justify-between h-full">
            <div>
              <SidebarItems onClose={() => setOpen(false)} />
              <button
                type="button"
                onClick={() => console.log("logout")}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              >
                <span>Log Out</span>
              </button>
            </div>
          </div>
          <SheetClose />
        </SheetContent>
      </Sheet>

      <aside className="hidden md:flex sticky top-0 min-w-[16rem] h-screen bg-gray-50 dark:bg-gray-900 p-4">
        <div className="w-full">
          <SidebarItems />
        </div>
      </aside>
    </>
  )
}

export default AppSideBar
