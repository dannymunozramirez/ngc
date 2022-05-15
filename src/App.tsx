import "./app.scss";
import NgcHeader from "./components/header";
import { Route, Routes } from "react-router-dom";
import NgcLanding from "./content/ngcLanding";
import Content from "carbon-components-react/lib/components/UIShell/Content";

import { NgcProyectos } from "./components/screens/NgcProyectos";

export const App = () => {
  return (
    <>
      <NgcHeader />
      <Content>
        <Routes>
          <Route path="/" element={<NgcLanding />} />
          <Route path="proyectos" element={<NgcProyectos />} />
        </Routes>
      </Content>
    </>
  );
};
