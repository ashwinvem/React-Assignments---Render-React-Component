import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const names = ["ashwin", "ajay", "naveen", "anirudh", "harsha", "utwej"];

  return (
    <ol key="relativeList">
      {names.map((name, index) => (
        <li key={`relativeListItem${index}`}>{name}</li>
      ))}
    </ol>
  );
};

export default App;
