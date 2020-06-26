import React from "react";
import { withRouter } from "react-router-dom";
import { ourAllWork } from "../components/OurWorks";

function CaseStudy({ match }) {
  console.log(match);
  const selectedWork = ourAllWork.find((work) => {
    console.log(work);
    return match.params.id === work.workTitle;
  });
  return (
    <div className="container">
      <h1>{selectedWork.workTitle}</h1>
      <p>{selectedWork.workDescription}</p>
      <img src={selectedWork.imgName} alt="" />
    </div>
  );
}

export default withRouter(CaseStudy);
