export type Dream = {
  id: number;
  userId: number;
  dreamTypeId: number;
  categoryIds: number[];
  cityId: number;
  name: string;
  description: string;
  filename: string;
  mimeType: string;
  imageData: null;
  age: number;
  amount: number;
  likes: number;
  statusName: string;
  dateStart: number[];
  dateEnd: null;
  donatesIds: null;
  sumOfDonates: number;
}