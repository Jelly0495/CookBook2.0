import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

import fa from "Assets/FA.svg";
import as from "Assets/AS.svg";
import cdb from "Assets/CDB.svg";
import apim from "Assets/APIM.svg";
import sac from "Assets/SAC.svg";
import ra from "Assets/react.png";

function Overview(props) {
  const tooltipData = [
    {
      src: ra,
      placement: "left",
      text: "Cookbook Front-end is created by React, React Router, React Bootstrap, React Hooks and Axios. All components are written as Functional.",
    },
    {
      src: as,
      placement: "bottom-end",
      text: "Application is hosted in Azure App Service.",
    },
    {
      src: cdb,
      placement: "top-start",
      text: "As database service is used Azure Cosmos DB.",
    },
    {
      src: sac,
      placement: "bottom-end",
      text: "For storage of static images we setup Azure Blob storage.",
    },
    {
      src: fa,
      placement: "top-start",
      text: "Back-end is coded in Node.JS as Azure Functions.",
    },
    {
      src: apim,
      placement: "right",
      text: "API is exposed via Azure API Management.",
    },
  ];

  return (
    <>
      <h1 className="display-1 text-center">{props.headline}</h1>
      <div className="row mt-5">
        {tooltipData.map((tooltip) => {
          return (
            <OverlayTrigger
              placement={tooltip.placement}
              delay={{ show: 160, hide: 10 }}
              overlay={
                <Tooltip>
                  <div>{tooltip.text}</div>
                </Tooltip>
              }
            >
              <img
                className="svg-icon col-md-2 mx-auto d-block"
                src={tooltip.src}
              ></img>
            </OverlayTrigger>
          );
        })}
      </div>
    </>
  );
}

export default Overview;
