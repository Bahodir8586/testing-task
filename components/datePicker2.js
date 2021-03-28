import React, { useState, useEffect } from "react";

const datePicker2 = (props) => {
  const [date, setDate] = useState("");

  const dateInputHandler = (e) => {
    setDate(e.target.value);
  };
  const dateSubmitHandler = () => {
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (!date.match(dateformat)) {
      alert("Invalid date format!");
      setDate("");
      return;
    }
    var pdate = date.split("/");
    var dd = parseInt(pdate[0]);
    var mm = parseInt(pdate[1]);
    var yy = parseInt(pdate[2]);
    var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (mm == 1 || mm > 2) {
      if (dd > ListofDays[mm - 1]) {
        alert("Invalid date format!");
        setDate("");
        return;
      }
    }
    if (mm == 2) {
      var lyear = false;
      if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
        lyear = true;
      }
      if (lyear == false && dd > 28) {
        alert("Invalid date format!");
        setDate("");
        return;
      }
      if (lyear == true && dd > 29) {
        alert("Invalid date format!");
        setDate("");
        return;
      }
    }

    props.onSubmit(date);
    setDate("");
  };
  return (
    <div className="col-4 mx-auto mt-5">
      <h5 className="text-center mb-4">Enter date(MM/DD/YYYY)</h5>
      <input
        type="text"
        value={date}
        onChange={dateInputHandler}
        className="form-control datePicker"
        placeholder="mm/dd/yyyy"
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

export default datePicker2;
