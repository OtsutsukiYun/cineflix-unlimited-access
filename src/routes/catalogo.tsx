import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/catalogo")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  component: DisabledCatalogoPage,
});

function DisabledCatalogoPage() {
  return null;
}
