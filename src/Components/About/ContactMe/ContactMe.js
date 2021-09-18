import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

function ContactMe(props) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Check out<br/>Source Code here!
    </Tooltip>
  );

  const renderTooltip2 = (props) => (
    <Tooltip className="" id="button-tooltip2" {...props}>
      Check out<br/>my CV here!
    </Tooltip>
  );

  return (
    <>
      <h1 className="display-1 text-center">{props.headline}</h1>
      <div className="row text-center col-md-8 mx-auto">
        <div className="col-md-6 icon">
          <OverlayTrigger
            placement="left"
            delay={{ show: 150, hide: 250 }}
            overlay={renderTooltip}
          >
            <a className="link" href="https://github.com/Jelly0495/CookBook2.0">
              <i className="fab fa-github"></i>
            </a>
          </OverlayTrigger>
        </div>
        <div className="col-md-6 icon">
          <OverlayTrigger
            placement="right"
            delay={{ show: 150, hide: 250 }}
            overlay={renderTooltip2}
          >
            <a
              className="link"
              href="https://www.linkedin.com/in/richard-uzik-accenture"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </OverlayTrigger>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
