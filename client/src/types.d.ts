interface Product {
  _id?: string;
  name: string;
  description: string;
  price: number;
  imageURL: string;
  added?: boolean;
  selectedCartAmount: number | 0;
}

interface Action {
  type: string;
  payload?: any;
}
