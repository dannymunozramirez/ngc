import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { objectClicked } from "../store/switcher-slice";
interface ObjectSelected {
  id: string;
  name: string;
  desc: string;
  pic: string;
}
export const useCard = () => {
  const dispatch = useAppDispatch();

  const objectClickHandler = (objectSelectedFromCard: ObjectSelected) => {
    dispatch(objectClicked(objectSelectedFromCard));
  };

  const infoObjectClicked = useAppSelector((state) => state.ui.objectSelected);

  return {
    infoObjectClicked,
    objectClickHandler
  };
};
