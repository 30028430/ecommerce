import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://media.gq.com/photos/5ada54fc2fe6d07ee31257e7/master/w_1600%2Cc_limit/kanye-west-0814-GQ-FEKW03.01.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            title="iphone 12 pro"
            price={1199.99}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61J5vVqO0jL._AC_UX569_.jpg"
            rating={5}
          />
          <Product
            title="iphone 12 pro"
            price={1199.99}
            image="https://www.pbtech.co.nz/imgprod/M/P/MPHAPP11211280__1.jpg?h=1832452481"
            rating={5}
          />
          {}
        </div>
        <div className="home_row">
          <Product
            title="iphone 12 pro"
            price={1199.99}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71E+oh38ZqL._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            title="iphone 12 pro"
            price={1199.99}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61qSLd+X21L._AC_UX679_.jpg"
            rating={5}
          />
          <Product
            title="iphone 12 pro"
            price={1199.99}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71AGOX9MORL._AC_SY355_.jpg"
            rating={5}
          />
          <Product
            title="iphone 12 pro"
            price={1199.99}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51pgGsepmfL._AC_UY445_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="iphone 12 pro"
            price={1199.99}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51dWOpPSesL._AC_SX425_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
