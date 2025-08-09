
import { initializeApp } from "firebase/app";
import { getAnalytics, setUserProperties } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

setUserProperties(analytics, {
  language: navigator.language || "unknown",
  screen_resolution: `${window.screen.width}x${window.screen.height}`,
  platform: navigator.platform || "unknown",
  user_agent: navigator.userAgent || "unknown",
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown",
  referrer: document.referrer || "direct",  
  device_type: /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop",
  touch_support: "ontouchstart" in window ? "yes" : "no", 

  first_visit: localStorage.getItem("dex12_first_visit") || (() => {
    const now = new Date().toISOString();
    localStorage.setItem("dex12_first_visit", now);
    return now;
  })(),
  visitor_id: localStorage.getItem("dex12_visitor_id") || (() => {
    const id = Math.random().toString(36).substring(2, 10);
    localStorage.setItem("dex12_visitor_id", id);
    return id;
  })(),
});

export {app,analytics};