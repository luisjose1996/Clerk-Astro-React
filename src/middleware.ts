import { clerkMiddleware, createRouteMatcher } from "astro-clerk-auth/server";

// This will match any route that starts with /dashboard
const matchesDashboard = createRouteMatcher(["/dashboard(.*)"]);

export const onRequest = clerkMiddleware((auth, context, next) => {
  // if the user is not signed in and they are trying to access the dashboard, redirect them to the sign in page
  if (matchesDashboard(context.request) && !auth().userId) {
    return auth().redirectToSignIn();
  }

  return next();
});
