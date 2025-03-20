import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import Login from "@/pages/login";

import NotFound from "@/pages/not-found";
import Partners from "@/pages/partners";
import Register from "@/pages/register";
import Success from "@/pages/success";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={Partners} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/success" component={Success} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
