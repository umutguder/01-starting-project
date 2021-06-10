import React from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <p>
        Everything from sweet milk chocolate to super dark chocolate with 80
        percent cocoa, and a whole host of other options in between.
      </p>
    </section>
  );
};

export default MealsSummary;
