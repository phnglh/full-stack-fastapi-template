import { Button } from "@/components/ui/button"
import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useState } from "react"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  const [value,setValue] = useState(false)
  useEffect(()=> {
    console.log('value',value)
  },[value])
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Button
      size={"sm"}
        onClick={()=> setValue((pre) => !pre)}
      >
        Click me
      </Button>
    </div>
  )
}
