export interface ProductType  {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    // city: string;
    // added: string;
    // posterId: number;
  };


  export interface DataState {
    products: ProductType[]
   // status: 'idle' | 'loading' | 'failed'
  }
