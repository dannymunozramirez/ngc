import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FormComp } from "../../formComponent/FormComp";
import { NgcCardComp } from "../card/NgcCardComp";

export const NgcConsultas = () => {
  return (
    <>
      <div className="bx--grid bx--grid--no-gutter bx--grid--full-width about-alternative-background">
        <div className="bx--row landing-page__tab-content">
          <div className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen">
            <h2 className="landing-page__subheading">NGC Contacto</h2>
          </div>
        </div>

        <div className="bx--grid bx--grid--no-gutter bx--grid--full-width ">
          <div className="bx--row landing-page__tab-content">
            <div
              style={{ marginBottom: 70, marginRight: 90 }}
              className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen"
            >
              <h2 className="landing-page__subheading"></h2>
              <FormComp isFrenchToggled={false} />
            </div>
            <div id="iframe-map-container-bigSc" className=" shadow-container">
              <h1>Mapa</h1>
            </div>
            <div
              id="iframe-map-container-bigSM"
              className=" shadow-container"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
