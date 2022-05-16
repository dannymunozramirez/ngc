import { ModalWrapper } from "carbon-components-react";
import React from "react";

export const NgcModal = () => {
  return (
    <ModalWrapper
      buttonTriggerText="Launch modal"
      modalHeading="Modal heading"
      modalLabel="Label"
      handleSubmit={() => true}
      
    >
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        cursus fermentum risus, sit amet fringilla nunc pellentesque quis. Duis
        quis odio ultrices, cursus lacus ac, posuere felis. Donec dignissim
        libero in augue mattis, a molestie metus vestibulum. Aliquam placerat
        felis ultrices lorem condimentum, nec ullamcorper felis porttitor.{" "}
      </p>
    </ModalWrapper>
  );
};
