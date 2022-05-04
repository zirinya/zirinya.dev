import React, { useEffect } from "react";
const Giscus = () => {
  const COMMENTS_ID = "comments-container";
  function LoadComments() {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "zirinya/zirinya.dev");
    script.setAttribute("data-repo-id", "R_kgDOHPuWnA");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOHPuWnM4CO16T");
    script.setAttribute("data-mapping", "title");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;
    const comments = document.getElementById(COMMENTS_ID);
    if (comments) comments.appendChild(script);
    return () => {
      const comments = document.getElementById(COMMENTS_ID);
      if (comments) comments.innerHTML = "";
    };
  }
  
  useEffect(() => {
    LoadComments();
  }, []);

  return (
    <div>
      <div className="giscus" id={COMMENTS_ID} />
    </div>
  );

};

export default Giscus;
