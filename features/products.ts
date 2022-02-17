import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface Products extends Array<Item> {}

const dataSlice = createSlice({
  name: "data",
  initialState: [] as Products,
  reducers: {
    // addProduct: {
    //   reducer: (state, action: PayloadAction<Item>) => {
    //     state.push(action.payload);
    //   },
    //   prepare: (
    //     id: number,
    //     title: string,
    //     price: number,
    //     category: string,
    //     description: string,
    //     image: string
    //   ) => {
    //     return { payload: { id, title, price, category, description, image } };
    //   },
    // },
    getProducts:{
      reducer: (state, action: PayloadAction<Products>) => {
        state = [...action.payload];
      },
      prepare: (
        arr: Array<Item>,
      ) => {
        return { payload: arr };
      },
    }
  },
});

export const { getProducts } = dataSlice.actions;
export default dataSlice.reducer;
