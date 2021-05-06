import React from "react";


export const ServiceContent = ({picture, parag1,list, parag2,subtitle }) => {
  // const list1 = list.split(',');

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={picture} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3>{subtitle}</h3>
              <p>{parag1}</p>
              <ul>
                {list.map(item => {
                  return <li key={item}>{item}</li>
                })}
              </ul>
              <p>{parag2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
