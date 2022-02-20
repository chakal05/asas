import React, { createContext, useReducer, Dispatch } from "react";

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  city: string;
  added: string;
  posterId: number;
};

type InitialStateType = {
  products: ProductType[];
};

type ProductActions = {
  type: string;
  payload: any;
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


export const productReducer = (
  state: ProductType[],
  action: ProductActions
) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return [...action.payload];
      case 'SORT_BY_TEXT':
        return {
          ...state,
          text: action.payload,
        };
      case 'SORT_BY_JOBTYPE':
        return {
          ...state,
          jobType: action.payload,
        };
    
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
