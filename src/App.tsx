import "./app.scss";
import NgcHeader from "./components/header";
import { Route, Routes } from "react-router-dom";
import NgcLanding from "./content/ngcLanding";
import Content from "carbon-components-react/lib/components/UIShell/Content";
import { PersonFavorite32, Application32, Globe32 } from "@carbon/icons-react";
import { InfoSection, InfoCard } from "./components/footer";

export const App = () => {
  return (
    <>
      <NgcHeader />

      <Content>
        <Routes>
          <Route path="/" element={<NgcLanding />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </Content>
    </>
  );
};
