import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface ObjectSelected {
  id: string;
  name: string;
  desc: string;
  pic: string;
}

// interface NewTabInformation {
//   id: string;
//   name: string;
//   description: string
// }

// Define a type for the slice state
interface ToggleState {
  isVisibleLeftSideMenu: boolean;
  isfileUploaderVisibility: boolean;

  // Este pasa como un solo objeto el otro (NewTabObject) lo estoy enviando como una lista de objectos
  objectSelected: ObjectSelected;
  newTabInfo: [
    {
      id: string;
      name: string;
      description: string;
    }
  ];
  selected: number;
}

// Define the initial state using that type
const initialState: ToggleState = {
  isVisibleLeftSideMenu: false,
  isfileUploaderVisibility: false,
  objectSelected: {
    id: "",
    name: "",
    desc: "",
    pic: "",
  },
  newTabInfo: [
    {
      id: "",
      name: "",
      description: "",
    },
  ],
  selected: 0,
};

const sliceLeftMenu = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.isVisibleLeftSideMenu = !state.isVisibleLeftSideMenu;
    },

    toggleRight(state) {
      state.isVisibleLeftSideMenu = false;
    },

    // This function will take whatever element is selected on switcher
    objectClicked(state, action) {
      state.objectSelected = action.payload;
    },

    newTabSelected(state, action) {
      state.selected = action.payload++;
    },

    fileUploaderVisibility(state) {
      state.isfileUploaderVisibility = !state.isfileUploaderVisibility;
    },

    newTabName(state, action) {
      console.log(action.payload + " element received in slice");
      state.newTabInfo.push(action.payload);
    },
  },
});

export const {
  toggle,
  objectClicked,
  fileUploaderVisibility,
  toggleRight,
  newTabName,
  newTabSelected,
} = sliceLeftMenu.actions;
export const selectUI = (state: RootState) => state.ui;

export default sliceLeftMenu.reducer;
