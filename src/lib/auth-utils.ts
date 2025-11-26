export type UserRole = "ADMIN" | "PATIENT" | "DOCTOR";

export type RouteConfig = {
  exact: string[];
  patterns: RegExp[];
};

export const authRoutes = ["/login", "/register", "/forgot-password", "/reset-password"];

export const commonProtectedRoutes: RouteConfig = {
  exact: ["/my-profile", "/settings"],
  patterns: [],
};

export const doctorProtectedRoutes: RouteConfig = {
  exact: [],
  patterns: [/^\/doctor/], // e.g., /doctor/dashboard, /doctor/patients
};

export const adminProtectedRoutes: RouteConfig = {
  exact: [],
  patterns: [/^\/admin/], // e.g., /admin/dashboard,
};

export const patientProtectedRoutes: RouteConfig = {
  exact: [],
  patterns: [/^\/dashboard/], // e.g., /dashboard,
};

export const isAuthRoute = (pathname: string) => {
  return authRoutes.some((route: string) => {
    // return route.startsWith(pathname); // for prefix matching
    return route === pathname; // for exact matching
  });
};

export const isRouteMatches = (pathname: string, routes: RouteConfig): boolean => {
  if (routes.exact.includes(pathname)) {
    return true;
  }
  return routes.patterns.some((pattern: RegExp) => {
    return pattern.test(pathname);
  });
  // if pathname === /dashboard/my-appointments => matches /^\/dashboard/ => return true
};

export const getRouteOwner = (pathname: string): UserRole | null | "COMMON" => {
  if (isRouteMatches(pathname, adminProtectedRoutes)) {
    return "ADMIN";
  }
  if (isRouteMatches(pathname, doctorProtectedRoutes)) {
    return "DOCTOR";
  }
  if (isRouteMatches(pathname, patientProtectedRoutes)) {
    return "PATIENT";
  }
  if (isRouteMatches(pathname, commonProtectedRoutes)) {
    return "COMMON";
  }

  return null;
};

export const getDefaultDashboardRoute = (role: UserRole): string => {
  switch (role) {
    case "ADMIN":
      return "/admin/dashboard";
    case "DOCTOR":
      return "/doctor/dashboard";
    case "PATIENT":
      return "/dashboard";
    default:
      return "/";
  }
};

export const isValidRedirectForRole = (redirectPath: string, role: UserRole): boolean => {
  const routeOwner = getRouteOwner(redirectPath);

  if (routeOwner === null || routeOwner === "COMMON") {
    // public route
    return true;
  }
  if (routeOwner === role) {
    // role matches
    return true;
  }
  return false;
};
