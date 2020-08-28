module.exports = {
  header: {
    title: "Alexandre Le Lain",
    menu: {
      theme: "Mode",
      toggleMode: "Switch to dark or light theme",
      contact: "Contact",
    },
    en: "English",
    fr: "Français",
  },
  landing: {
    title: "Welcome home.",
    description:
      "Discover my projects made with passion. And with lots of coffee.",
  },
  footer: {
    title: "Let's stay in touch!",
    bottom:
      "Made with React.js & Gatsby.js with ❤️ and ☕ by Alexandre Le Lain.",
    mail: "lelain.alexandre@gmail.com",
    twitter: "@a_lelain",
    github: "alexandre-lelain",
    linkedin: "alexandre-lelain",
  },
  projects: {
    cv: {
      title: "My Web-Resume",
      description: [
        "My web-resume made with ❤ with React. You will find everything about my current job, my past experience, my diploma and my hobbies there.",
        "You will also find there my CV in PDF available in both french & english.",
      ],
      controls: [
        {
          label: "Visit my web-resume",
          link: "https://alexandre-lelain.github.io/my-website/",
        },
      ],
    },
    noCodeNoBug: {
      title: "No Code, No Bug",
      description: [
        `No Code, No Bug. A blog with tech articles that might be helpful. Or not!`,
        `Through my journey as a Software Engineer I come across concepts and fancy technologies I often do not understand. When I do, and wish it was explained in a certain way, I write a post about it.`,
        `It was made with components-extra, React & Gatsby.`,
      ],
      controls: [
        {
          label: "Github project",
          link: "https://github.com/alexandre-lelain/nocode-nobug",
        },
        {
          label: "Let's read some articles",
          link: "https://nocode-nobug.com/",
        },
      ],
    },
    componentsExtra: {
      title: "Components-extra",
      description: [
        `An open-source lib made of React components.`,
        `Based on styled-components' styling system and material-ui, it aims to provide web developers with a set of customizable molecule components to build web apps fast and effectively.`,
        `The lib follow the compound-components pattern to offer the best customization possible for the developers.`,
        `Fun fact: this website was built with this lib! :)`,
      ],
      controls: [
        {
          label: "npm package",
          link: "https://www.npmjs.com/package/components-extra",
        },
        {
          label: "visit the storybook",
          link: "https://components-extra.netlify.com",
        },
      ],
    },
    jsExtra: {
      title: "Js-extra",
      description: [
        `Does what native Javascript doesn't.`,
        `This open-source JS lib is available on npm and provides some useful functions that are not built-in with native Javascript. This lib can be used in addition to the famous ones like Lodash or Underscore.Js.`,
        `It was written in TypeScript, and it aims to be the lightest posssible. We don't need to make the node_modules folder heavier than it already is!`,
      ],
      controls: [
        {
          label: "npm package",
          link: "https://www.npmjs.com/package/js-extra",
        },
        {
          label: "check out its API",
          link: "https://js-extra.netlify.com",
        },
      ],
    },
    reactThemeMode: {
      title: "React-theme-mode",
      description: [
        `Managing your theme mode has never been that simple.`,
        `react-theme-mode comes with a React Hook that helps you manage your theme mode.`,
        `Since it was built on top of React's Context, you can use it anywhere inside your React application. By default, it also saves into the localStorage the new theme value each time it changes,
         so that it remains for the future visits of the users on your website.`,
        `Fun fact: this website uses it to handle the light and dark theme 😉`,
      ],
      controls: [
        {
          label: "module npm",
          link: "https://www.npmjs.com/package/react-theme-mode",
        },
        {
          label: "Check the doc",
          link: "https://react-theme-mode.netlify.app",
        },
      ],
    },
    avecVousDemain: {
      title: "Avec Vous Demain",
      description: [
        `This is a public website promoting a new book written by one member of my family. You will find some samples and some info about the author.`,
        `I'm sorry to say that it's only available in french so far. Maybe a good opportunity for you to learn this complex and beautiful language if you want to know more about the book? ;)`,
        `The website was built using components-extra and Gatsby.js to take advantage of its lazy-loading & SEO plugins.`,
      ],
      controls: [
        {
          label: "let's have a tour",
          link: "https://www.avec-vous-demain.com/",
        },
      ],
    },
    topShape: {
      title: "Top Shape",
      description: [
        "My first Android app. It offers some tools to calculate various body mass/shape indexes, and also offers a daily follow up, thus giving to the users the posibility to check their evolution each day.",
        "It was developped more than 5 years ago, and is now outdated and quite ugly, but a revamp is planned in my backlog!",
      ],
      controls: [
        {
          label: "Download link",
          link:
            "https://play.google.com/store/apps/details?id=com.all.topshape",
        },
      ],
    },
    agentWeb: {
      title: "Web Agent (alpha of IDA)",
      description:
        "Web Agent is a JavaScript plugin for developers. It is a very simple AI whose purpose is to help UX on websites. Started in 2017, the project is currently on stand by.",
      controls: [
        {
          label: "Try it now",
          link: "https://alexandre-lelain.github.io/agentWeb/",
        },
      ],
    },
    wip: {
      title: "Work in progress",
      description: "More projects coming soon...",
    },
  },
}
