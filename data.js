export default {
  title: 'Séverine Bianchi',
  subtitle: 'Développeuse Web',
  email: 'mailto:severine.bianchi78@gmail.com',
  phone: 'tel:0647547806',
  trainingList: [
    {
      id: 1,
      content: 'Formation de 5 mois en téléprésentiel du 27/01/20 au 07/07/20 avec O\'Clock',
    },
    {
      id: 2,
      content: '3 mois de socle HTML5/CSS3/PHP/Javascript',
    },
    {
      id: 3,
      content: '1 mois de spécialisation en React/Redux',
    },
    {
      id: 4,
      content: '1 mois de projet en conditions professionnelles',
    },
    {
      id: 5,
      content: 'Titre Professionnel Développeur Web et Web mobile Niveau V',
    },
  ],
  training: [
    {
      id: 1,
      content: 'Cette formation m\'a permis d\'acquérir les bonnes pratiques : écrire un code propre, lisible, créer des sites entièrement responsive, savoir chercher les réponses à un problème, et finalement j\'ai appris à apprendre.',
    },
    {
      id: 2,
      content: 'Le dernier mois de formation était consacré à la réalisation d\'un projet en équipe, en suivant la méthode Agile et en conditions professionnelles.',
    },
    {
      id: 3,
      content: 'Au-delà des compétences purement techniques, j\'ai appris à mener un projet de bout en bout, préparer les documents de conception tels que le cahier des charges, les wireframes, définir un MVP, créer les User Stories avec Trello, ainsi que les documents propres à la base de données (MCD et dictionnaire de données).',
    },
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
    {
      id: 6,
      name: 'CV',
      path: 'CV',
    },
  ],
  projetspersos: [
    {
      id: 4,
      name: 'My Pets Diary',
      thumbnail: './assets/images/emptyCapture.JPG',
      alt: 'petsdiary',
      description: 'Projet en cours - Carnet de santé de ses animaux de compagnie en ligne, avec suivi de leurs soins et RDV',
      technos: [
        {
          id: 1,
          techno: 'MongoDB',
        },
        {
          id: 2,
          techno: 'Express',
        },
        {
          id: 3,
          techno: 'React',
        },
        {
          id: 4,
          techno: 'Redux',
        },
        {
          id: 5,
          techno: 'NodeJs',
        },
      ],
      githublink: '',
      link: '',
    },
    {
      id: 3,
      name: 'The Metadata Viewer',
      thumbnail: './assets/images/Capture1.PNG',
      alt: 'metadataviewer',
      description: 'Site permettant de visualiser les métadonnées EXIF d\'une photo, développé avec React, serveur Node.js et base de données MongoDB',
      technos: [
        {
          id: 1,
          techno: 'MongoDB',
        },
        {
          id: 2,
          techno: 'Express',
        },
        {
          id: 3,
          techno: 'React',
        },
        {
          id: 4,
          techno: 'Redux',
        },
        {
          id: 5,
          techno: 'NodeJs',
        },
      ],
      githublink: 'https://github.com/SeverineB/MetadataViewer-front',
      link: 'http://metadata-viewer.severinebianchi.com/',
    },
    {
      id: 2,
      name: 'Toodolist',
      thumbnail: './assets/images/Todolist-capture.png',
      alt: 'toodolist',
      description: 'Site de gestion de tâches conservées en BDD (mise à jour, archivage, suppression), avec différents thèmes d\'affichage',
      technos: [
        {
          id: 1,
          techno: 'Javascript',
        },
        {
          id: 2,
          techno: 'CSS',
        },
        {
          id: 3,
          techno: 'PHP',
        },
        {
          id: 4,
          techno: 'Laravel',
        },
        {
          id: 5,
          techno: 'MySQL',
        },
      ],
      githublink: 'https://github.com/SeverineB/Todolist',
      link: 'http://todolist.severinebianchi.com',
    },
    {
      id: 1,
      name: 'Portfolio V.1',
      thumbnail: './assets/images/Portfolio-thumb.jpg',
      alt: 'portfolio',
      description: 'Portfolio développé avec React/Redux, animations faites en CSS avec SASS, et avec la librairie AOS',
      technos: [
        {
          id: 1,
          techno: 'React',
        },
        {
          id: 2,
          techno: 'Redux',
        },
        {
          id: 3,
          techno: 'SASS',
        },
      ],
      githublink: 'https://github.com/SeverineB/Portfolio',
      link: 'http://severinebianchi.com',
      details: [
        {
          name: 'paraph1',
          content: 'Ce portfolio est mon premier projet personnel, réalisé en juillet 2020 à la sortie de ma formation.',
        },
        {
          name: 'paraph2',
          content: 'Les données sont statiques, et le state est géré grâce à Redux.',
        },
        {
          name: 'paraph3',
          content: 'J\'ai utilisé des librairies comme AOS afin de gérer certaines animations type scroll, l\'animation principale du chat au chargement de la page étant quant à elle faite from scratch.',
        },
        {
          name: 'paraph5',
          content: ' J\'aime créer des interfaces agréables et interactives, à l\'UI soignée, et accessibles sur tous supports.',
        },
      ],
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
      tech: 'NodeJs',
      icon: ['fab', 'node'],
    },
    {
      id: 8,
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
      content: ' En janvier 2020, j\'ai entamé une reconversion dans le développement web, passionnée par la création et le webdesign, il était temps pour moi de me tourner vers un domaine dans lequel j\'allais pouvoir réellement m\'épanouir !',
    },
    {
      name: 'paraph3',
      content: ' Ce qui me fait vibrer au quotidien ? Coder, et débugguer :D ! Afin de poursuivre mon apprentissage et d\'améliorer mes connaissances, j\'ai développé les projets présentés plus bas.',
    },
    {
      name: 'paraph4',
      content: ' Et en dehors du code ? Je suis une grande amatrice de cinéma et de lecture, plus particulièrement d\'horreur et de fantastique. Créative touche-à-tout j\'adore bricoler, et l\'un de mes plus grands rêves est de partir faire le tour du monde en famille !',
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
