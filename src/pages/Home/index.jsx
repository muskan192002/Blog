import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { sliderData, Product } from "../../constant/data";
import { Link } from "react-router-dom";

const Home = () => {
  const [cartCounts, setCartCounts] = useState({});
  const [cartTotal, setCartTotal] = useState(0);

  const handleIncrement = (product) => {
    setCartCounts((prev) => {
      const newCount = (prev[product.id] || 0) + 1;
      if (newCount > (product.stock || 5)) {
        alert("Out of stock!");
        return prev;
      }
      const newCart = { ...prev, [product.id]: newCount };
      updateCartTotal(newCart);
      return newCart;
    });
  };

  const handleDecrement = (product) => {
    setCartCounts((prev) => {
      const currentCount = prev[product.id] || 0;
      if (currentCount <= 1) {
        alert("At least one product should be added");
        return prev;
      }
      const newCount = currentCount - 1;
      const newCart = { ...prev, [product.id]: newCount };
      updateCartTotal(newCart);
      return newCart;
    });
  };

  const updateCartTotal = (cart) => {
    let total = 0;
    for (const id in cart) {
      const product = Product.find((p) => p.id === parseInt(id));
      if (product) total += product.price * cart[id];
    }
    setCartTotal(total);
  };

  return (
    <div className="container-fluid py-3">
      <div className="line-container text-center w-100 py-50">
        <h5 className="line ff">WOMEN'S APPAREL BRAND</h5>
      </div>
      <div className="container text-center py-4">
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ dynamicBullets: true, clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {sliderData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="d-flex justify-content-center">
                <img
                  src={item.src}
                  alt={`slide-${item.id}`}
                  className="img-fluid w-100 rounded shadow-sm"
                  style={{ maxHeight: "800px", objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="line-container text-center py-50">
        <h5 className="line ff">Featured Items</h5>
      </div>

      <div className="row justify-content-center py-50">
        {Product.map((item) => (
          <div className="col-md-3 text-center" key={item.id}>
            <img
              src={item.src}
              alt={item.name}
              className="img-fluid w-100 rounded shadow-sm"
            />

            <Link
              to={`/product/${item.id}`}
              className=" d-block w-100 bg-white text-center p-2 fs-6 text-decoration-none text-danger fw-bold ff text-capitalize"
            >
              NEW LAUNCH
            </Link>

            <h3 className="fs ff text-center color mt-2">{item.name}</h3>
            <h6 className="text-center fs color ff fs-6">{item.price}</h6>

            <div className="d-flex justify-content-center align-items-center mt-3">
              <button
                onClick={() => handleIncrement(item)}
                className="btn btn-dark mx-2"
              >
                +
              </button>
              <span className="mx-2">{cartCounts[item.id] || 0}</span>
              <button
                onClick={() => handleDecrement(item)}
                className="btn btn-outline-dark mx-2"
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="text-center py-4">
        <h4 className="ff">Total Cart Value: ${cartTotal}</h4>
      </div> */}
    </div>
  );
};

export default Home;
