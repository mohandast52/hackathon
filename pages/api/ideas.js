import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  res.status(200).json({
    success: true,
    data: [
      {
        id: "101",
        title: "Idea",
        description: "Something",
        suggested_on: "29/05/2020",
        rating: 4.5,
        ratings_count: 6,
        icon: "https://i.ibb.co/0nJsFH3/1.png",
        tags: ["Bot", "AI"],
        reasons: [
          {
            img: "",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos nemo ad facere ut a suscipit asperiores expedita. Aut libero vero odit ducimus accusamus obcaecati cumque eos.",
          },
          {
            img: "",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos nemo ad facere ut a suscipit asperiores expedita. Aut libero vero odit ducimus accusamus obcaecati cumque eos.",
          },
          {
            img: "",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos nemo ad facere ut a suscipit asperiores expedita. Aut libero vero odit ducimus accusamus obcaecati cumque eos.",
          },
        ],
        members_involed: [
          { name: "Name 1", title: "Software Engineer" },
          { name: "Name 2", title: "Software Engineer" },
          { name: "Name 3", title: "Marketing" },
          { name: "Name 4", title: "Product Manager" },
        ],
        mentors: [{ name: "Name 1", title: "Engineering Manager" }],
      },
    ],
  });
};
