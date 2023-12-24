import React from "react";
import "./style.css";
const Menucard = ({ menudata }) => {
  return (
    <>
      <section className="main-card--container">
        {menudata.map((curElem) => {
          const { id, name, description, category, image } = curElem;//spread operator or destructuring
          return (
            <div>
              <div className="card-container  " key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {id}
                    </span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-author subtle ">
                      {category}
                    </span>
                    <br></br>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read Me</div>
                  </div>
                  <img
                    src={image}
                    alt="images"
                    className="card-container-img"
                  />
                  <br></br>
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Menucard;
