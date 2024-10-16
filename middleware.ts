import createMiddleware from "next-intl/middleware";
import { locales } from "./config";

export default createMiddleware({
  locales,
  defaultLocale: "ua",
});

export const config = {
  matcher: ["/", "/(ua|en)/:path*"],
};
