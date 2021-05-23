export const idea_list = [
  {
    id: "101",
    title: "Idea 1",
    description:
      "Idea 1 was a real-time intelligent CRM solution for local commerce that provided merchants with customer insights.",
    suggested_on: "29/05/2020",
    rating: 4.5,
    ratings_count: 6,
    icon: "",
    tags: ["Gaming", "AI"],
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
];

export const idea_list_dummy = [
  idea_list[0],
  {
    ...idea_list[0],
    id: "102",
    description: "Hello",
    rating: 2.5,
    ratings_count: 6,
    tags: ["Agriculture", "AI", "Innovation"],
  },
  {
    ...idea_list[0],
    id: "103",
    ratings_count: 50,
    rating: 4.5,
    tags: ["FinTech"],
  },
  {
    ...idea_list[0],
    id: "104",
    ratings_count: 40,
    rating: 4,
    tags: ["Innovation", "Logistics", "AI"],
  },
  {
    ...idea_list[0],
    id: "105",
    ratings_count: 4,
    rating: 4,
    tags: ["Covid", "AI"],
  },
  {
    ...idea_list[0],
    id: "106",
    ratings_count: 42,
    tags: ["Education"],
    rating: 3,
  },
  {
    ...idea_list[0],
    id: "107",
    ratings_count: 29,
    rating: 3.5,
    tags: ["Travel/Tourism"],
  },
];
