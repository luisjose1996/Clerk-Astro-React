import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import astroClerk from "astro-clerk-auth";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), astroClerk({
    afterSignInUrl: "/",
    afterSignUpUrl: "/"
  })],
  output: "server",
  adapter: netlify()
});