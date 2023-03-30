export interface IProduct {
  img: string;
  name: string;
  price: number;
  tags: [
    {
      title: string;
      color: string;
      background: string;
    }
  ];
}
