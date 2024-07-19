export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }

  export interface ProductCreateInput {
    productId: number;
    productName: string;
    productCategory: string;
    productImage: string;
    productPrice: number;
    userId?: number;
}


  export interface UserProduct {
    id: number;
    productId: number;
    productName: string;
    productCategory: string;
    productImage: string;
    productPrice: number;
  }