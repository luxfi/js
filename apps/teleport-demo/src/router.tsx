import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";

import {
  useNavigate,
  useRouterState,
  Outlet,
  RouterProvider,
  Router as TanstackRouter,
  Route,
  RootRoute,
} from "@tanstack/react-router";
import { TeleporterPage } from "./pages/teleporter";
import { MintPage } from "./pages/mint";

/**
 * Create a Root route
 */
const Root = () => {
  const navigate = useNavigate();
  const { location } = useRouterState();

  return (
    <Tabs defaultValue="teleport" className="w-full" value={location.pathname}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger
          value="/"
          onClick={() => {
            navigate({
              to: "/",
            });
          }}
        >
          Bridge
        </TabsTrigger>
        <TabsTrigger
          value="/mint"
          onClick={() => {
            navigate({
              to: "/mint",
            });
          }}
        >
          Mint
        </TabsTrigger>
      </TabsList>
      <Outlet />
    </Tabs>
  );
};
const rootRoute = new RootRoute({
  component: Root,
});

/**
 * Create an index route for Teleporter
 */
const Index = () => {
  return (
    <TabsContent value="/">
      <TeleporterPage />
    </TabsContent>
  );
};
export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

/**
 * Create a Mint route
 */
export const mintRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/mint",
  component: Mint,
});
function Mint() {
  return (
    <TabsContent value="/mint">
      <MintPage />
    </TabsContent>
  );
}

// Create the router using your route tree
const router = new TanstackRouter({
  routeTree: rootRoute.addChildren([indexRoute, mintRoute]),
});

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const Router = () => {
  return <RouterProvider router={router} />;
};
