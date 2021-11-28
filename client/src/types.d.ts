interface Product {
  _id?: string;
  name: string;
  description: string;
  price: number;
  imageURL: string;
  added?: boolean;
}

interface Action {
  type: string;
  payload?: any;
}
