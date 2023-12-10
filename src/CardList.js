import React from "react";
import Card from "./Card";
import { robots } from "./Robots";

const CardList = () => {
  return (
    <div className="tc">
      {robots.map((robot) => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
