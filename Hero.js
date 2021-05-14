import React from "react";

const Hero = ({ heroName }) => {
  if (heroName === "Joker") {
    throw new Error("You are not Hero!!!");
  }
  return (
    <>
      <h2>Hero : {heroName}</h2>
    </>
  );
};

export default Hero;
