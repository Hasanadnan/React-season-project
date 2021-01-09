import React from "react";

const Loder = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        <h1>{props.message}</h1>
        {/* <h1>{props.message || "Loading"}</h1> */}
      </div>
    </div>
  );
};

Loder.defaultProps = {
  message: "Loading...",
};
//same kaj {/* <h1>{props.message || "Loading"}</h1> */}

export default Loder;
