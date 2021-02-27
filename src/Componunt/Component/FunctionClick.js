import React from "react";

function FunctionClick() {
  function eventHandler() {
    console.log(`Button clicked`);
  }
  return (
    <div>
      <button onClick={eventHandler}>click</button>
    </div>
  );
}

export default FunctionClick;
