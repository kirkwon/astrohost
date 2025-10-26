import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

const authEnabled = import.meta.env.PUBLIC_AUTH_ENABLED === 'true';

// The middleware will be a no-op if auth is disabled
export const onRequest = (context, next) => {
  if (!authEnabled) {
    return next();
  }

  // Auth is enabled, proceed with Clerk middleware
  const isPublicRoute = createRouteMatcher([
    '/',
    '/sign-in(.*)',
    '/sign-up(.*)',
  ]);

  const clerkMiddlewareHandler = clerkMiddleware((auth, req) => {
    if (!isPublicRoute(req)) {
      return auth().protect();
    }
  });

  return clerkMiddlewareHandler(context);
};
