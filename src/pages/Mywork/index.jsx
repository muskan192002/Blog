import React from "react";
import { Container, Row } from "react-bootstrap";
import { mywork } from "../../constant/data";
import { createPost, updatePost } from "../../features/PostSlice/action";
import { useSelector, useDispatch } from "react-redux";

const Mywork = () => {
   const postStore = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleCreatePost = () => {
    dispatch(
      createPost({
        title: "new posts",
      })
    );
  };
  const handleUpdatePost = () => {
    dispatch(
      updatePost({
        title: "new posts",
      })
    );
  };

  return (
    <div className="container-fluid py-50">
      <div className="line-container text-center w-100">
        <h5 className="line ff py-5">FEW BASIC WORKS</h5>
      </div>
      <Row className="justify-content-center">
        {mywork.map((item) => (
          <div className="col-md-4 text-center pb-4 card ff" key={item.id}>
            <div className="card-header">
              <h5>BASIC TEMPLATE</h5>
              <div className="image-container">
                <img
                  src={item.src}
                  alt="my work"
                  height={400}
                  width={400}
                  className="img"
                />
                <div className="image-overlay">
                  <p className="overlay-text">View Project</p>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p>"This work during my learning period."</p>
              <a href="#" className="card-button">
                View Details
              </a>
            </div>
          </div>
        ))}
      </Row>
      <div className="w-10">
         {postStore?.product?.isLoading ? "loading..." : ""}
        <button className="c-btn ff" onClick={handleCreatePost}>
          CREATE POST
        </button>
        <button className="c-btn ff" onClick={handleUpdatePost}>
          UPDATE posts
        </button>
      </div>
    </div>
  );
};

export default Mywork;
