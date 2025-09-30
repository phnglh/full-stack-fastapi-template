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

import {
  createRootRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router"
import React, { Suspense } from "react"

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
  const isAuthRoute =
    routerState.location.pathname.includes("/login") ||
    routerState.location.pathname.includes("/signup") ||
    routerState.location.pathname.includes("/recover-password")
  const isAdminRoute = routerState.location.pathname.includes("/admin")

  const shouldShowNavigation = !isAuthRoute && !isAdminRoute

  return (
    <>
  {shouldShowNavigation && (
    <header className="app-header">
      <nav >
        <Link to="/" color="white">Trang chủ</Link>
        <Link to="/about" color="white">Dịch vụ</Link>
        <Link to="/about" color="white">Liên hệ</Link>
      </nav>
    </header>
  )}

  <main className={shouldShowNavigation ? "main-content" : "main-full"}>
    <Outlet />
  </main>

  {shouldShowNavigation && (
    <footer className="app-footer">
      <p>&copy; 2024 MyApp. All rights reserved.</p>
    </footer>
  )}


      <Suspense>
        <TanStackDevtools />
      </Suspense>
    </>
  )
}
