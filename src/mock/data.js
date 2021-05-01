import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Muiz Abdulwasiu | Developer ', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'AOMUIZ Portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Muiz Abdulwasiu',
  subtitle: 'I am a Frontend Developer, interested in all things technology.',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'AOMUIZ.png',
  paragraphOne:
    'I am Ethusiastic front-end Developer, skilled in Javascript, React, HTML and CSS. Seeking to deliver high-quality, responsive Web Applications.',
  paragraphTwo:
    ' I have experience with cloud technology, specifically Microsft Azure, as well as a modest range of languages and frameworks.',
  paragraphThree:
    'I am currently looking to contribute my skills to a team where I can prove my abilities while growing my capabilities.',
  resume:
    'https://github.com/AOMuiz/my-portfolio/blob/main/src/components/About/LinkedIn-Generated-Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'covid.jpeg',
    title: 'Covid-19 Tracker',
    info: 'A Covid-19 application buith with React',
    info2:
      'The web Application has the following functionalities: Get latest cases - Global and per country, Search for selected country, News around covid-19 and track covid-19 vaccine process.',
    url: 'https://aomuiz.github.io/cov19-tracker',
    repo: 'https://github.com/AOMuiz/cov19-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'news.jpeg',
    title: 'News App',
    info: 'A news application buith with React',
    info2:
      'You can either search for a specific topic or you cna decide to read the lates news from differnt news vendors from all around the world',
    url: 'https://aomuiz.github.io/news-app-V2',
    repo: 'https://github.com/AOMuiz/news-app-V2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.jpeg',
    title: 'Weather App',
    info: 'A Weather application buith with React',
    info2:
      'Search for the weather conditions for different city by typing in the "city name" or the "city, Country"',
    url: 'https://aomuiz.github.io/React-weather-App/',
    repo: 'https://github.com/AOMuiz/React-weather-App', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "I'm available for full-time, freelance and contact work",
  btn: 'SAY HELLO',
  email: 'theanalyst56@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/AOMuiz/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/abdumuize-abdulwasiu-5b53661bb',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AOMuiz',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
