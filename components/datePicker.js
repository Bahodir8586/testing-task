import React, { useState, useEffect } from "react";

const datePicker = (props) => {
  const [date, setDate] = useState("");
  useEffect(() => {
    return () => {
      setDate("");
    };
  }, []);

  const dateInputHandler = (e) => {
    setDate(e.target.value);
  };
  const dateSubmitHandler = () => {
    props.onSubmit(date);
    setDate("");
  };
  return (
    <div className="col-4 mx-auto">
      <input
        type="date"
        onChange={dateInputHandler}
        value={date}
        className="form-control datePicker"
      />
      <div className="text-center pt-4">
        <button
          type="button"
          onClick={dateSubmitHandler}
          className="btn btn-outline-success px-4 py-1"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default datePicker;
