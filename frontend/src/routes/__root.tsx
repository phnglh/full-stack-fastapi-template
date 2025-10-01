// import { createRootRoute, Outlet } from "@tanstack/react-router"
// import React, { Suspense } from "react"

// // import NotFound from "@/components/Common/NotFound"

// const loadDevtools = () =>
//   Promise.all([
//     import("@tanstack/react-router-devtools"),
//     import("@tanstack/react-query-devtools"),
//   ]).then(([routerDevtools, reactQueryDevtools]) => {
//     return {
//       default: () => (
//         <>
//           <routerDevtools.TanStackRouterDevtools />
//           <reactQueryDevtools.ReactQueryDevtools />
//         </>
//       ),
//     }
//   })

// const TanStackDevtools =
//   process.env.NODE_ENV === "production" ? () => null : React.lazy(loadDevtools)

// export const Route = createRootRoute({
//   component: () => (
//     <>
//       <Outlet />
//       <Suspense>
//         <TanStackDevtools />
//       </Suspense>
//     </>
//   ),
//   notFoundComponent: () => <div>404 Not Found</div>,
// })

import { createRootRoute, Outlet, useRouterState } from "@tanstack/react-router"
import React, { Suspense } from "react"
import AppSidebar from "@/components/layout/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

const loadDevtools = () =>
  Promise.all([
    import("@tanstack/react-router-devtools"),
    import("@tanstack/react-query-devtools"),
  ]).then(([routerDevtools, reactQueryDevtools]) => {
    return {
      default: () => (
        <>
          <routerDevtools.TanStackRouterDevtools />
          <reactQueryDevtools.ReactQueryDevtools />
        </>
      ),
    }
  })

const TanStackDevtools =
  process.env.NODE_ENV === "production" ? () => null : React.lazy(loadDevtools)

export const Route = createRootRoute({
  component: RootComponent,
  context: () => ({
    auth: {
      user: null,
      isAuthenticated: true,
    },
  }),
  notFoundComponent: () => <div>404 Not Found</div>,
})

function RootComponent() {
  const routerState = useRouterState()

  const isLmsRoute = routerState.location.pathname.startsWith("/")

  return (
    <>
      {isLmsRoute ? (
        <SidebarProvider>
          <AppSidebar />
          <main className=" p-6 flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </SidebarProvider>
      ) : (
        <main>
          <Outlet />
        </main>
      )}

      <Suspense>
        <TanStackDevtools />
      </Suspense>
    </>
  )
}
