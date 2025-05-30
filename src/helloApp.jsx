import React from "react";
import { useState } from "react";

function HelloApp() {
  const [name, setName] = useState("");

  return (
    <div>
      <div className="container-hello">
        <div className="main-hello">
          <h2 className="hello">SayHello App</h2>
          <div className="input">
            <input
              className="input-in"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="output">
            <p className="output-in">
              Hello,<span className="name"> {name}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HelloApp;
