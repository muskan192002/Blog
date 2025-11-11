import React from "react";
import { pic } from "../../constant/data";
const handleAddToCart = (item) => {
  console.log(`Adding item to cart: ${item.id}`);
  alert(`Successfully added an item to your cart!`);
};

const About = () => {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="line-container text-center py-50">
        <h5 className="line ff">Behind The Brand</h5>
      </div>
      <div className="row justify-content-center">
        {pic.map((item) => (
          <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center" key={item.id}>
            
            <div
              className="product-card text-center shadow-sm p-2 bg-white rounded"
              style={{
                transition: "transform 0.3s ease",
                cursor: "pointer",
                width: "350px",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-10px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div
                className="image-wrapper overflow-hidden"
                style={{ height: "450px" }}
              >
                <img
                  src={item.src}
                  alt="Dressed Up Item"
                  className="img-fluid"
                  
                />
              </div>
               <h4 className="text-center fs color ff fs-6 py-3">{item.name}</h4>
               <h6 className="text-center fs color ff fs-6 py-3">{item.price}</h6>
              <button
                className="c-btn py-2 w-50 mt-3 mb-2"
                onClick={() => handleAddToCart(item)}
              >
                + Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <hr className="my-5" />
      <div className="row text-center py-5">
        <div className="col-12 col-md-8 mx-auto">
          <h3 className="mb-4 brown ff">
           Fashion forecasting involves predicting upcoming styles <br /> based on cultural, social, and economic trends.
          </h3>
          <p className="lead text-muted px-4 brown">
            The fashion trends in India 2025 spotlight a new era of <br />creativity —
            where sustainable choices, cultural heritage, and bold individuality <br />
            come together to redefine modern elegance. From the revival of
            handlooms  <br />to futuristic streetwear, Indian fashion is embracing a
            balance between timeless tradition and <br />fresh innovation. Here’s your
            ultimate guide to what’s defining  <br />the nation’s wardrobe this year
          </p>
          <button className="c-btn w-25 py-2">View More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
