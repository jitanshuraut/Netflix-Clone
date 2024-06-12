import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    val_high: 0,
  },
  reducers: {
    Show: (state) => {
      state.value = 1;
    },
    NotShow: (state) => {
      state.value = 0;
    },
    High_light: (state) => {
      let base = "http://localhost:3000/";

      console.log(window.location.href)
      console.log(base + "search")
      if (window.location.href == base + "home") {
        state.val_high = 0;
      } else if (window.location.href == base + "search") {
        state.val_high = 1;
      } else if (window.location.href == base + "movies") {
        state.val_high = 2;
      } else if (window.location.href == base + "tv") {
        state.val_high = 3;
      } else if (window.location.href == base + "details") {
        state.val_high = 0;
      } else if (window.location.href == base + "trending") {
        state.val_high = 4;
      }
    else if (window.location.href == base + "profile") {
      state.val_high = 5;
    }
    },
  },
});

// Action creators are generated for each case reducer function
export const { Show, NotShow,High_light} = counterSlice.actions;

export default counterSlice.reducer;
