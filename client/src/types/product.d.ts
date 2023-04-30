export interface IProduct {
  _id: string;
  id: string;
  img: string;
  name: string;
  price: number;
  compare_at_price: number;
  description: string;
  estimate_ship_date: string;
  tags: string;
  thumbnails: string[];
  images: string[];
  quantity: string;
}

export interface IComment {
  _id: string;
  userId: string;
  productId: string;
  rate: number;
  cmt: string;
  createdAt: string;
  updatedAt: string;
  fullname: string[];
  ingame: string[];
}
