export const idea_list = [
  {
    id: '101',
    title: 'Idea 1',
    description: 'Idea 1 was a real-time intelligent CRM solution for local commerce that provided merchants with customer insights.',
    suggested_on: '29/05/2020',
    rating: 4.5,
    icon:'',
    reasons: [
      {
        img: '',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos nemo ad facere ut a suscipit asperiores expedita. Aut libero vero odit ducimus accusamus obcaecati cumque eos.',
      },
      {
        img: '',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos nemo ad facere ut a suscipit asperiores expedita. Aut libero vero odit ducimus accusamus obcaecati cumque eos.',
      },
      {
        img: '',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos nemo ad facere ut a suscipit asperiores expedita. Aut libero vero odit ducimus accusamus obcaecati cumque eos.',
      }
    ],
    members_involed: [
      { name: 'Name 1', title: 'Software Engineer' },
      { name: 'Name 2', title: 'Software Engineer' },
      { name: 'Name 3', title: 'Marketing' },
      { name: 'Name 4', title: 'Product Manager' },
    ],
    mentors: [
      { name: 'Name 1', title: 'Engineering Manager' },
    ],
  }
];

export const idea_list_dummy = [
  idea_list[0],
  { ...idea_list[0], id: '102', description: "Hello" },
  { ...idea_list[0], id: '103' },
  { ...idea_list[0], id: '104' },
  { ...idea_list[0], id: '105' },
  { ...idea_list[0], id: '106' },
  { ...idea_list[0], id: '107' },
];

