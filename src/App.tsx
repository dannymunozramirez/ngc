import "./app.scss";
import NgcHeader from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NgcLanding from "./content/ngcLanding";
import Content from "carbon-components-react/lib/components/UIShell/Content";
import { NgcProyectos } from "./components/screens/NgcProyectos";
import { NgcFooter } from "./components/footer/NgcFooter";
import { NgcConsultas } from "./components/screens/NgcConsultas";

export const App = () => {
  return (
    <>
      <NgcHeader />
      <Content>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NgcLanding />} />
            <Route path="proyectos" element={<NgcProyectos />} />
            <Route path="contacto" element={<NgcConsultas />} />
          </Routes>
        </BrowserRouter>
      </Content>

      <NgcFooter />
    </>
  );
};
