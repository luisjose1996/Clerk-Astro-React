# Community Clerk + Astro + React starter

## What's inside?

Get started managing your users with Clerk in your Astro application with Clerk's React hooks, components, and utilities.

In this starter you'll find examples of:

- Custom Sign-in/up pages
- Protecting your Dashboard using `clerkMiddleware`
- A Dashboard that displays current user details using `Astro.locals`
- Navbar with conditional rendering based on user's authentication status using Clerk's `SignedIn` and `SignedOut` components

## Get started

1. Clone the repository

```bash
git clone https://github.com/domitriusclark/astro-clerk-react
```

2. Install dependencies

```base
npm install
```

3. Create a Clerk account & application

4. Create a `.env` file in the root of your project and add your publishable & secret keys (found in your Clerk application Dashboard) + your expected sign-in and sign-up paths

```
PUBLIC_ASTRO_APP_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

PUBLIC_ASTRO_APP_CLERK_SIGN_IN_URL=/sign-in
PUBLIC_ASTRO_APP_CLERK_SIGN_UP_URL=/sign-up
```

5. Start the server

```bash
npm run dev
```
