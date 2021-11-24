interface Product {
  _id?: string;
  name: string;
  description: string;
  price: number;
  imageURL: string;
}

interface Action {
  type: string;
  payload?: any;
}
