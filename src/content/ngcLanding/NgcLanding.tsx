import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from "carbon-components-react";
import { InfoSection, InfoCard } from "../../components/footer/Info";
import {
  Application32,
  Globe32,
  LogoDelicious20,
  LogoDelicious32,
  LogoDigg32,
  LogoDiscord32,
  LogoFacebook32,
  LogoInstagram32,
  PersonFavorite32,
} from "@carbon/icons-react";

const props = {
  tabs: {
    selected: 0,
    role: "navigation",
  },
  tab: {
    role: "presentation",
    tabIndex: 0,
  },
};
const NgcLanding = () => {
  return (
    <>
      <div style={{backgroundColor:'gray'}} className="bx--grid bx--grid--full-width landing-page  ">
        <div
          //
          style={
            {
              // backgroundImage: `url("https://scontent.fymy1-2.fna.fbcdn.net/v/t39.30808-6/243160529_574830190633980_996997480295202979_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=FiAfl71WZ5QAX9tnyBJ&_nc_ht=scontent.fymy1-2.fna&oh=00_AT9AVBttTaku83fzH3sUsS1U1dXS36lgeYkQbKrSLGS0pw&oe=6282DFC7")`,
              // backgroundPosition: 'center center',
              // backgroundSize:'100$',
            }
          }
          className="cds--row landing-page__banner estilos-portada "
        >
          <div className="cds--col-lg-16">

            <span style={{ textAlign: "center" }}>
              <div>
                <h1 className="landing-page__heading">
                  <span style={{ fontSize: 80 }}>NGC</span>
                  <span style={{ fontSize: 60 }}> - La Serena, Chile</span>{" "}
                  <br />
                </h1>
              </div>
              <br />
              <h3> Nueva Generacion de Constructores</h3>
            </span>
          </div>
        </div>
        <div className="cds--row landing-page__r2">
          <div className="cds--col cds--no-gutter">
            <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div className="bx--row landing-page__tab-content">
                <div className="bx--col-lg-16">Introducción de la empresa</div>
              </div>
            </div>
          </div>
          <InfoSection heading={<h1>LOGO</h1>} className="landing-page__r3">
          <InfoCard
            heading="Redes Sociales"
            body="Nos puedes ver en:"
            icon={
              <>
                <LogoFacebook32 />
                <LogoInstagram32 />
              </>
            }
          />
          <InfoCard
            heading="Links de Interés"
            body={
              <>
                <ul>
                  <li>
                    <a href="">Conservador de bienes raices</a>
                  </li>
                  <li>
                    <a href="">SII</a>
                  </li>
                  <li>
                    <a href="">CCHC</a>
                  </li>
                </ul>
              </>
            }
            icon={<Application32 />}
          />
        </InfoSection>
        </div>
        
      </div>
    </>
  );
};

export default NgcLanding;
