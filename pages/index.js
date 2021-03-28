import { useState, useCallback, useEffect } from "react";

import axios from "../components/axios";
import DatePicker from "../components/datePicker";
import DatePicker2 from "../components/datePicker2";
import DateShower from "../components/dateShower";
import Spinner from "../components/spinner";

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:3000/api/crud");
  const dates = await res.json();
  return {
    props: {
      dates,
    },
    revalidate: 1,
  };
}

const Home = (props) => {
  let initialState = "";
  if (props.dates) {
    initialState = props.dates.data;
  }
  const [dates, setDates] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const addDateHandler = useCallback(
    (date) => {
      if (!date) {
        return;
      }
      const element = {
        key: Date.now().toString(),
        value: date,
      };
      setIsLoading(true);
      fetch("http://127.0.0.1:3000/api/crud", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(element),
      })
        .then((response) => {
          setIsLoading(false);
          setDates((currentDates) => [...currentDates, element]);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    },
    [dates]
  );

  const removeDateHandler = useCallback(
    (key) => {
      setIsLoading(true);
      axios
        .delete("/", { data: key })
        .then((response) => {
          setDates((currentDates) => {
            return currentDates.filter((date) => date.key !== key);
          });
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    },
    [dates]
  );

  let content = (
    <div className="container mx-auto py-5">
      {/* <DatePicker onSubmit={(date) => addDateHandler(date)} /> */}
      <DatePicker2 onSubmit={(date) => addDateHandler(date)} />
      <div className="mt-5">
        <h3 className="text-center">Saved dates</h3>
        {dates.length > 0 ? (
          dates.map((e) => (
            <DateShower
              value={e.value}
              key={e.key}
              id={e.key}
              onDelete={removeDateHandler}
            />
          ))
        ) : (
          <p className="text-center h1 text-danger mt-3">NOT FOUND</p>
        )}
      </div>
    </div>
  );

  if (isLoading) {
    content = <Spinner />;
  }

  return content;
};
export default Home;
