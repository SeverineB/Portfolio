export default {
  title: 'Séverine Bianchi',
  subtitle: 'Développeuse Web',
  email: 'mailto:severine.bianchi78@gmail.com',
  phone: 'tel:0647547806',
  trainingList: [
    'Formation de 5 mois en téléprésentiel du 27/01/20 au 07/07/20 avec O\'Clock',
    '3 mois de socle HTML5/CSS3/PHP/Javascript',
    '1 mois de spécialisation en React/Redux',
    '1 mois de projet en conditions professionnelles',
    'Titre Professionnel Développeur Web et Web mobile Niveau V',
  ],
  training: [
    'Cette formation m\'a permis d\'acquérir les bonnes pratiques : écrire un code propre, lisible, créer des sites entièrement responsive, savoir chercher les réponses à un problème, et finalement j\'ai appris à apprendre.',
    'Le dernier mois de formation était consacré à la réalisation d\'un projet en équipe, en suivant la méthode Agile et en conditions professionnelles.',
    'Au-delà des compétences purement techniques, j\'ai appris à mener un projet de bout en bout, préparer les documents de conception tels que le cahier des charges, les wireframes, définir un MVP, créer les User Stories avec Trello, ainsi que les documents propres à la base de données (MCD et dictionnaire de données).',
  ],
  links: [
    {
      id: 1,
      name: 'Projets',
      path: 'projets',
    },
    {
      id: 2,
      name: 'A propos',
      path: 'about',
    },
    {
      id: 3,
      name: 'Compétences',
      path: 'skills',
    },
    {
      id: 4,
      name: 'Formation',
      path: 'training',
    },
    {
      id: 5,
      name: 'Contact',
      path: 'contact',
    },
  ],
  projets: [
    {
      id: 1,
      name: 'Oshop',
      thumbnail: './assets/images/Oshop-thumbnail.jpg',
      alt: 'baskets',
      description: 'Site e-commerce de vente de chaussures avec base de données MySql',
      technos: ['PHP', 'Altorouter', 'Bootstrap', 'MySQL', 'MVC'],
      githublink: 'https://github.com/SeverineB/Oshop',
      link: 'http://oshop.severinebianchi.com',
    },
    {
      id: 2,
      name: 'Oshop Backoffice',
      thumbnail: './assets/images/Oshop-thumbnail.jpg',
      alt: 'backoffice',
      description: 'Backoffice d\'un site e-commerce avec gestion des produits et des utilisateurs',
      technos: ['PHP', 'Bootstrap', 'MySQL', 'MVC'],
      githublink: 'https://github.com/SeverineB/Oshop-Backoffice',
      link: 'http://oshop-backoffice.severinebianchi.com',
    },
    {
      id: 3,
      name: 'Oblog',
      thumbnail: './assets/images/Oblog-capture.png',
      alt: 'blog',
      description: 'Blog collaboratif sur des sujets liés au développement web',
      technos: ['PHP', 'Bootstrap', 'MVC'],
      githublink: 'https://github.com/SeverineB/Oblog',
      link: 'http://oblog.severinebianchi.com',
    },
 /*    {
      id: 3,
      name: 'Todolist',
      thumbnail: './assets/images/Todolist-capture.png',
      alt: 'todolist',
      description: 'Todolist avec gestion des tâches en BDD grâce à une API',
      technos: ['PHP', 'Javascript', 'API'],
      githublink: 'https://github.com/SeverineB/Todolist',
      link: '',
    }, */
    {
      id: 4,
      name: 'Blog React',
      thumbnail: './assets/images/BlogReact-thumbnail.PNG',
      alt: 'blog react',
      description: 'Blog créé avec React sur des sujets liés au développement web',
      technos: ['React', 'SASS'],
      githublink: 'https://github.com/SeverineB/BlogReact',
      link: '',
    },
    {
      id: 5,
      name: 'Chatroom',
      thumbnail: './assets/images/Chatroom-thumbnail.PNG',
      alt: 'chatroom',
      description: 'Application de messagerie en temps réel créée avec React/Redux et socket.io pour les WebSockets',
      technos: ['React', 'Redux', 'SASS','Socket.io'],
      githublink: 'https://github.com/SeverineB/Chat',
      link: '',
    },
    {
      id: 6,
      name: 'O\'Recipe',
      thumbnail: './images/Orecipe-thumbnail.PNG',
      alt: 'site de recettes',
      description: 'Site de recettes avec connexion utilisateur et serveur Node.js',
      technos: ['React', 'Redux', 'SASS', 'Node.js', 'Express'],
      githublink: 'https://github.com/SeverineB/Orecipe',
      link: 'http://orecipes.severinebianchi.com',
    },
  ],
  skills: [
    {
      id: 1,
      tech: 'HTML5',
      icon: ['fab', 'html5'],
    },
    {
      id: 2,
      tech: 'CSS3',
      icon: ['fab', 'css3'],
    },
    {
      id: 3,
      tech: 'Javascript',
      icon: ['fab', 'js'],
    },
    {
      id: 4,
      tech: 'PHP',
      icon: ['fab', 'php'],
    },
    {
      id: 5,
      tech: 'React',
      icon: ['fab', 'react'],
    },
    {
      id: 6,
      tech: 'Github',
      icon: ['fab', 'github'],
    },
    {
      id: 7,
      tech: 'Sass',
      icon: ['fab', 'sass'],
    },
  ],
  softs: [
    {
      id: 1,
      name: 'Créativité',
    },
    {
      id: 2,
      name: 'Sens du service',
    },
    {
      id: 3,
      name: 'Esprit d\'équipe',
    },
    {
      id: 4,
      name: 'Gestion des priorités',
    },
    {
      id: 5,
      name: 'Goût du challenge',
    },
    {
      id: 6,
      name: 'Capacité d\'assimilation',
    },
  ],
  about: [
    {
      name: 'paraph1',
      content: ' Hello, moi c\'est Séverine, et je suis Développeuse Web.',
    },
    {
      name: 'paraph2',
      content: ' En janvier 2020, j\'ai entamé une reconversion dans le développement web en suivant une formation intensive de 5 mois avec O\'Clock.',
    },
    {
      name: 'paraph3',
      content: ' Après de nombreuses années dans le commercial et le service client, il était temps pour moi de me tourner vers un domaine dans lequel j\'allais pouvoir réellement m\'épanouir.',
    },
    {
      name: 'paraph4',
      content: ' Passionnée par le Webdesign et l\'univers du Web depuis de nombreuses années, j\'ai naturellement choisi de me spécialiser dans des langages axés UI, et plus particulièrement React.js.',
    },
    {
      name: 'paraph5',
      content: ' J\'aime créer des interfaces agréables et interactives, à l\'UI soignée, et accessibles sur tous supports.',
    },
  ],
  socials: [
    {
      id: 1,
      name: 'Linkedin',
      icon: '../../assets/icons/linkedin.svg',
      link: 'http://www.linkedin.com/in/severine-bianchi',
    },
    {
      id: 2,
      name: 'Twitter',
      icon: '../../assets/icons/twitter.svg',
      link: 'https://twitter.com/Gnookiie',
    },
    {
      id: 3,
      name: 'Github',
      icon: '../../assets/icons/github.svg',
      link: 'https://github.com/SeverineB',
    },
  ],
  contact: [
    {
      name: 'email',
      icon: ['far', 'envelope'],
    },
  ],
};
