// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Post = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  city: string;
  added: string;
  posterId: string;
};

let data = [
  {
    id: 1,
    title: " title ",
    price: 3433,
    description: "description",
    category: "Chaussure",
    images: ["img1", "img2", "img3"],
    city: "city",
    added: "date & heure",
    posterId: "user id",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  res.status(200).json(data);
}
