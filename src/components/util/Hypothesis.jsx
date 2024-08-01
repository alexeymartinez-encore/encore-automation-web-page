import React, { useEffect } from "react";

const Hypothesis = ({ children }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://hypothes.is/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div>{children}</div>;
};

export default Hypothesis;
