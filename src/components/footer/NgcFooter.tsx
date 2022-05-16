import {
  LogoFacebook32,
  LogoInstagram32,
  Application32,
} from "@carbon/icons-react";
import React from "react";
import { InfoSection, InfoCard } from "../../infoComponent";

export const NgcFooter = () => {
  return (
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
  );
};
