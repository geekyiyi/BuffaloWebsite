import React from "react";

export const ServiceContent = ({ data, subtitle }) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{subtitle}</h2>
              <p>{data ? data : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
