import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from "carbon-components-react";

const NgcHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header>
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

export default NgcHeader;
