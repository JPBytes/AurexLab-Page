import { useEffect } from "react";
import AOS from "AOS"
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
        duration: 1000, 
        once: false,
        mirror: true,
    });
  }, []);

  return null
}
