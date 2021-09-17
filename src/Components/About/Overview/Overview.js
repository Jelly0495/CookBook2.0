import React from "react";
import fa from "../../../Assets/FA.svg";
import as from "../../../Assets/AS.svg";
import cdb from "../../../Assets/CDB.svg";
import apim from "../../../Assets/APIM.svg";
import sac from "../../../Assets/SAC.svg";
import ra from "../../../Assets/React.svg";

function Overview(props) {
  return (
    <>
      <h1 className="display-1 text-center">{props.headline}</h1>
      <blockquote class="blockquote">
        <p className="box-p">
          <div className="row">
            <div className="col-md-6">
              Front-end technologies :
              <ul>
                <li>
                  React <img className="svg-icon-2" src={ra}></img>
                  <ul>
                    <li>Functional compoments</li>
                    <li>Bootstrap</li>
                    <li>React Router</li>
                    <li>Hooks</li>
                  </ul>
                </li>
                <li>Axios</li>
              </ul>
            </div>
            <div className="col-md-6">
              Back-end technologies :
              <ul>
                <li>
                  Server : Azure app service{" "}
                  <img className="svg-icon" src={as}></img>
                </li>
                <li>
                  Database : Azure Cosmos DB{" "}
                  <img className="svg-icon" src={cdb}></img>
                </li>
                <li>
                  Storage : Azure Blob storage{" "}
                  <img className="svg-icon" src={sac}></img>
                </li>
                <li>
                  Back-end : Azure Functions{" "}
                  <img className="svg-icon" src={fa}></img>
                </li>
                <li>
                  API : Azure API Management{" "}
                  <img className="svg-icon" src={apim}></img>
                </li>
              </ul>
            </div>
          </div>
        </p>
      </blockquote>
    </>
  );
}

export default Overview;
