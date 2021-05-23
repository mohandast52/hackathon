export const EG_IDEA = [
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
      { name: "Rachel Karen Green", title: "Software Engineer" },
      { name: "Phoebe Buffay", title: "Software Engineer" },
      { name: "Joseph Francis Tribbiani", title: "Marketing" },
      { name: "Monica E. Geller", title: "Product Manager" },
    ],
    // mentors: [{ name: "Name 1", title: "Engineering Manager" }],
  },
];

export const idea_list_dummy = [
  {
    ...EG_IDEA[0],
    title: "Reflection bot",
    description:
      "This bot will analyze your personality, based on the way you chat ",
    suggested_on: "29/05/2020",
    rating: 4.5,
    ratings_count: 6,
    tags: ["Bot", "AI"],
    icon: "https://i.ibb.co/0nJsFH3/1.png",
  },
  {
    ...EG_IDEA[0],
    id: "102",
    title: "Aesthetic",
    description:
      "App which can help you redesign your room right from placements to product allocation from amazon, Pepperfry, etc",
    rating: 2.5,
    ratings_count: 6,
    tags: ["App", "AI", "Innovation"],
    icon: "https://i.ibb.co/zhjNFTv/2.png",
    members_involed: [
      { name: "Ursula", title: "Software Engineer" },
      { name: "Chandler Muriel Bing", title: "Software Engineer" },
      { name: "Rose Galler", title: "Marketing" },
      { name: "Monica Galler", title: "Product Manager" },
    ],
    // 
  },
  {
    ...EG_IDEA[0],
    id: "103",
    title: "Oh so EASY",
    description: "Voice Recording in slack, no more long writeups needed.",
    ratings_count: 50,
    rating: 4.5,
    tags: ["AI", "Bot"],
    icon: "https://i.ibb.co/VjFrY8C/3.png",
    members_involed: [
      { name: "Phoebe Buffay Hannigan", title: "Software Engineer" },
    ],
  },
  {
    ...EG_IDEA[0],
    id: "104",
    title: "Fakogenic",
    description:
      "App that can detect fake news on WhatsApp and prevent future circulation. Need I say more",
    ratings_count: 40,
    rating: 4,
    tags: ["Innovation", "App", "AI"],
    icon: "https://i.ibb.co/F8RZXJ5/4.png",
    members_involed: [
      { name: "Dr. Richard Burke", title: "Product Manager" },
    ],
  },
  {
    ...EG_IDEA[0],
    id: "105",
    title: "Crealletic",
    description:
      "Creative Idea rater. Input any idea, and creative people will rate its creativity",
    ratings_count: 4,
    rating: 4,
    tags: ["Innovation"],
    icon: "https://i.ibb.co/cFRngKj/5.png",
    members_involed: [
      { name: "Kathy", title: "Product Manager" },
    ],
  },
  {
    ...EG_IDEA[0],
    id: "106",
    title: "Gambol",
    description:
      "App for investing in new ideas, the returns could be free subscription, etc. C'mon, Let the ideas fly.",
    ratings_count: 42,
    tags: ["Education"],
    rating: 3,
    icon: "https://i.ibb.co/gwt9fHk/6.png",
    members_involed: [
      { name: "Mike Hannigan", title: "Product Manager" },
    ],
  },
  {
    ...EG_IDEA[0],
    id: "1013",
    title: "Jockify",
    description:
      "Test your jokes with all other comedians helping you twist them into that perfect joke. ",
    rating: 4.5,
    ratings_count: 6,
    tags: ["Meme", "Others"],
    icon: "https://i.ibb.co/YX8XLgJ/10.png",
    members_involed: [
      { name: "Emma Geller Green", title: "Product Manager" },
    ],
  },
];

export const NEW_IDEAS = [
  {
    ...EG_IDEA[0],
    id: "107",
    title: "Onspot Mate",
    description:
      "App that helps you find your virtual partner or group, on basis of your movie choice for the night. You never know what can happen over a coffee",
    ratings_count: 29,
    rating: 3.5,
    tags: ["App", "Social"],
    icon: "https://i.ibb.co/LnjBt2p/7.png",
    members_involed: [
      { name: "Emma Geller Green", title: "Product Manager" },
    ],
  },
  {
    ...EG_IDEA[0],
    id: "1011",
    title: "Finman",
    description:
      "App that is a wholesome collection of all your financial documents, right from insurance to passbooks. They send you alerts about expiry date, payments, withdrawals, etc, it's like one wholesome app to manage all your holdings",
    rating: 0,
    ratings_count: 0,
    tags: ["Fintech", "AI", "App"],
    icon: "https://i.ibb.co/RvZySGg/8.png",
  },
  {
    ...EG_IDEA[0],
    id: "1012",
    title: "Imagolife",
    description:
      "Convert your ideas through Voice to the image. No need to write those lengthy creative briefs. You can thank us, centuries later",
    rating: 5,
    ratings_count: 1,
    tags: ["Voice AI", "AI"],
    icon: "https://i.ibb.co/YNP5ff8/9.png",
  },

];

// https://i.ibb.co/cFRngKj/5.png
// https://i.ibb.co/gwt9fHk/6.png
// https://i.ibb.co/LnjBt2p/7.png
// https://i.ibb.co/RvZySGg/8.png
// https://i.ibb.co/YNP5ff8/9.png
// https://i.ibb.co/YX8XLgJ/10.png
