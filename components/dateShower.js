import React, { useState, useEffect } from "react";

const dateShower = (props) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    let val = props.value.replace(/-/g, "/");
    setValue(val);
  }, []);
  return (
    <div className="my-3 text-center">
      <input
        type="text"
        value={value}
        readOnly
        onClick={props.onDelete.bind(this, props.id)}
        className="col-4 py-2 dateShower"
      />
    </div>
  );
};

export default dateShower;
