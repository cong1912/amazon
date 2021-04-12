import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt=""
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={1}
          title="the lear start up"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          price={(29, 99)}
          rating={5}
        />
        <Product />
      </div>
      <div className="home__row">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="home__row">
        <Product />
      </div>
    </div>
  );
}

export default Home;
