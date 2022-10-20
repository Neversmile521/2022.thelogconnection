import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import STYLES from "../../styles/home-plans/FloorPlan.module.scss";

export const FloorPlanSection = (props) => {
  console.log(props.floorPlans, "asdfasfasdf")
  return (
    <MDBContainer fluid>
      <div className={STYLES.floorPlan}>
          {
            props.floorPlans.map((img, index) =>{ 
              return <img src={img} key={index}/>
            })
          }
      </div>
    </MDBContainer>
  );
};

export default FloorPlanSection;
