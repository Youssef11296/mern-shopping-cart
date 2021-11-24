interface Product {
  _id?: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface Action {
  type: string;
  payload?: any;
}
