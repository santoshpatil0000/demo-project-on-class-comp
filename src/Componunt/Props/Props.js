import React from "react";

function Props(props) {
  const { name, sirName } = props;
  return (
    <div>
      <h1>
        Hi {name} and identity is {sirName}
      </h1>
      <h1>{props.trial}</h1>
    </div>
  );
}

export default Props;
