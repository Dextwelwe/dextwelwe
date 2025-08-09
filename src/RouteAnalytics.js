import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { getAnalytics, logEvent } from "firebase/analytics";

export default function RouteAnalytics() {
  const loc = useLocation();
  const lastPath = useRef("");

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    const path = loc.pathname + loc.search; 
    const full = window.location.href;

    if (path === lastPath.current) return;
    lastPath.current = path;

    const analytics = getAnalytics();
    logEvent(analytics, "page_view", {
      page_title: document.title,
      page_path: path,            
      page_location: full,
    });
  }, [loc]);

  return null;
}
