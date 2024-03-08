import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";
import astroClerk from "astro-clerk-auth";

export default defineConfig({
  integrations: [
    react(),
    astroClerk({
      afterSignInUrl: "/",
      afterSignUpUrl: "/",
    }),
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});