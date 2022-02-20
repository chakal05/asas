import React, { createContext, useReducer, Dispatch } from "react";

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  city: string;
  added: string;
};

type InitialStateType = {
  products: ProductType[];
};

const initialState: InitialStateType = {
  products: [],
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProductActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

type ProductActions = {
  type: string;
  payload: ProductType[];
};

export const productReducer = (
  state: ProductType[],
  action: ProductActions
) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return [...action.payload];

    default:
      return state;
  }
};

const reducer = (products, action) => ({
  products: productReducer(products, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
