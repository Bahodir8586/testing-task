import React from "react";

const dateShower = (props) => {
  return (
    <div className="my-3 text-center">
      <input
        type="date"
        value={props.value}
        readOnly
        onClick={props.onDelete.bind(this, props.id)}
        className="col-4 py-2 dateShower"
      />
    </div>
  );
};

export default dateShower;
