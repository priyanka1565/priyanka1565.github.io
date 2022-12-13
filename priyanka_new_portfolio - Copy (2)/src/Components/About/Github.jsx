import React from "react";
import "./github.css";
export const Github = () => {
  return (
    <div className="container">
      <div>
        <h1>Github Status</h1>
        <img
          align="left"
          src="https://github-readme-streak-stats.herokuapp.com/?user=priyanka1565&theme=radical"
          alt="priyanka"
          height="200px"
          width="45%"
        />
        <img
          align="right"
          src="https://github-readme-stats.vercel.app/api?username=priyanka1565&show_icons=true&theme=radical"
          height="200px"
          width="45%"
        />
      </div>
    </div>
  );
};
