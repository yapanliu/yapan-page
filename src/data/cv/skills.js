// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Programming Languages', 'Data Science'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Programming Languages'],
  },
  {
    title: 'POSTGRESQL',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'MySQL',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'HTML',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'CSS',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'JavaScript',
    competency: 3,
    category: ['Web Development', 'Programming Languages'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
