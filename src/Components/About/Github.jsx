import React from "react";
import "./github.css";
export const Github = () => {
  return (
    <div className="container">
      <div>
        <h1>Github Status</h1>
        <img
          id="github-streak-stats"
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            margin: "auto",
            marginBottom: "20px",
          }}
          align="left"
          src="https://github-readme-streak-stats.herokuapp.com/?user=priyanka1565&theme=radical"
          alt="priyanka"
          height="200px"
          width="45%"
          marginBottom="20px"
        />
        <img
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            margin: "auto",
            marginBottom: "20px",
          }}
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=priyanka1565&show_icons=true&theme=radical"
          height="200px"
          width="45%"
        />
      </div>
      <div
        className="cont_2"
        height="400px"
        width="100%"
        border="1px solid red"
      >
        <h1> GitHub Contribution Calendar</h1>

        <img
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            margin: "auto",
            marginBottom: "20px",
          }}
          align="center"
          src="https://ghchart.rshah.org/priyanka1565"
          alt="priyanka1565"
          height="300px"
          width="90%"
        />
      </div>
    </div>
  );
};
