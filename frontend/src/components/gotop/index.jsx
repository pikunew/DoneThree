import { useState, useEffect } from "react";

function Gotop() {
  const [setIsVisible] = useState(false);



  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  });

  
}

export default Gotop;
