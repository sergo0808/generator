import React, { useState, useEffect } from "react";
import AppStyles from "./App.module.css";
import * as Api from "../../utils/api";

const App = () => {
  const [slip, setSlip] = useState({});

  const handleClick = (e) => {
    if (e) {
      e.preventDefault();
    }
    Api.getAdvice().then((data) => {
      if (data && data.slip) {
        setSlip(data.slip);
      }
    });
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className={AppStyles.app}>
      <form className={AppStyles.form}>
        <h2 className={AppStyles.title}>Advice {slip.id}</h2>
        <p className={AppStyles.typography}>{slip.advice}</p>
        <div className={AppStyles.image}></div>
        <button className={AppStyles.button} onClick={handleClick}></button>
      </form>
    </div>
  );
};

export default App;
