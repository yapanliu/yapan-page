import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://scholar.google.com/citations?user=YE4-Q8sAAAAJ&hl=en',
    label: 'Google Scholar',
    icon: faGoogle,
  },
  {
    link: 'https://github.com/yapanliu',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/yapanliu',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:yliu88@syr.edu',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
