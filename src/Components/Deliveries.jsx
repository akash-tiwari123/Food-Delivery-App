import React from "react";
import TopPicks from "./TopPicks";
import Meal from "./Meal";
import TopNav from "./TopNav";

const Deliveries = () => {
  return (
    <div>
        <TopNav />
      <div>
        <div className="pt-28">
          <TopPicks />
        </div>
        <div>
          <Meal />
        </div>
      </div>
    </div>
  );
};

export default Deliveries;
