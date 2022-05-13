import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from "carbon-components-react";
import {
  AppSwitcher20,
  Notification20,
  UserAvatar20,
} from "@carbon/icons-react";

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />

        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="/" prefix="NGC">
          Logo
        </HeaderName>
        <HeaderNavigation aria-label="Carbon Tutorial"></HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/">Inicio</HeaderMenuItem>
              <HeaderMenuItem href="/proyectos">Proyectos</HeaderMenuItem>
              <HeaderMenuItem href="/info">Información</HeaderMenuItem>
              <HeaderMenuItem href="/contacto">Consultas</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>

        <HeaderGlobalBar id="contact-info-header">
          <HeaderMenuItem href="/">Inicio</HeaderMenuItem>
          <HeaderMenuItem href="/proyectos">Proyectos</HeaderMenuItem>
          <HeaderMenuItem href="/info">Información</HeaderMenuItem>
          <HeaderMenuItem href="/contacto">Consultas</HeaderMenuItem>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default TutorialHeader;
