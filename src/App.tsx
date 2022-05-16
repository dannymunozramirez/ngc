import "./app.scss";
import NgcHeader from "./components/header";
import { Route, Routes } from "react-router-dom";
import NgcLanding from "./content/ngcLanding";
import Content from "carbon-components-react/lib/components/UIShell/Content";
import { NgcProyectos } from "./components/screens/NgcProyectos";
import { NgcFooter } from "./components/footer/NgcFooter";
import { ModalWrapper } from "carbon-components-react";
import { useState } from "react";
import { NgcConsultas } from "./components/screens/NgcConsultas";
import { NgcCardComp } from "./components/card/NgcCardComp";

export const App = () => {
  
  return (
    <>
      <NgcHeader />
      <Content>
        <Routes>
          <Route path="/" element={<NgcLanding />} />
          <Route path="proyectos" element={<NgcProyectos />} />
          <Route path="contacto" element={<NgcConsultas />} />
        </Routes>
        
      </Content>
     
      <NgcFooter />
    </>
  );
};
