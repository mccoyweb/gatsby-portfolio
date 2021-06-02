import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Erik | Front-End Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1vMK8jjEMji5m3lDQadCj3tALiubmDwSi/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'light-dark.jpg',
    title: 'Light and Dark Mode Homepage',
    info: 'A homepage with a light and dark mode toggle.',
    info2: 'Technologies used: Html, CSS, JavaScript',
    url: 'https://mccoyweb.github.io/light-and-dark-homepage/',
    repo: 'https://github.com/mccoyweb/light-and-dark-homepage', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'mem-murray.jpg',
    title: 'Memory Game',
    info: 'A classic memory game built with React.',
    info2: 'Technologies used: React, Git',
    url: 'https://mccoyweb.github.io/mem-murray/',
    repo: 'https://github.com/mccoyweb/mem-murray', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'todo.jpg',
    title: 'To-Do List',
    info: 'A simple to-do list built using React Hooks.',
    info2: 'Technologies used: React',
    url: 'https://codepen.io/emccoy/full/LYVYJpG',
    repo: 'https://codepen.io/emccoy/pen/LYVYJpG', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'simon.jpg',
    title: 'Simon Game',
    info: 'A browser based version of the classic 80s electronic game, with accurate sounds and timing.',
    info2: 'Technologies used: jQuery, CSS3, HTML5',
    url: 'https://codepen.io/emccoy/full/vGKJRV',
    repo: 'https://codepen.io/emccoy/pen/vGKJRV', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'erikmccoy@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/emccoy',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/erik-mccoy-964aa769',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/mccoyweb',
    },
        {
      id: uuidv1(),
      name: 'free-code-camp',
      url: 'https://www.freecodecamp.org/mccoyweb',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
