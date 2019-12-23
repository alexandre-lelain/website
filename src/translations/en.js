module.exports = {
  header: {
    title: "Alexandre Le Lain",
    menu: {
      cv: "My CV",
      ce: "Components-extra",
      je: "Js-extra",
      avd: "Avec vous demain",
      rest: "{...rest}",
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
      description:
        "My web-resume made with ❤ with React. You will find everything about my past experience, my diploma and my hobbies there.",
      controls: [
        {
          label: "Visit my web-resume",
          link: "https://alexandre-lelain.github.io/my-website/",
        },
      ],
    },
    componentsExtra: {
      title: "Components-extra",
      description: `An open-source lib made of React components. Based on styled-components' styling system and material-ui's standards, it aims to provide web developers with a set of 'complex' but fast-to-use components to build web apps the fastest posible.
      The lib follow the compound-components pattern to offer the best customization possible for the developers. 
      Fun fact: this website was built with this lib! :) 
      `,
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
      description:
        "Does what native Javascript doesn't. This open-source JS lib is available on npm and provides some useful functions that are not built-in with native Javascript. This lib can be used in addition to the famous ones like Lodash or Underscore.Js.",
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
    avecVousDemain: {
      title: "Avec Vous Demain",
      description:
        "This is a public website promoting a new book written by one member of my family. I'm sorry to say that it's only available in french so far. Maybe a good opportunity for you to learn this complex and beautiful language if you want to know more about the book? ;)",
      controls: [
        {
          label: "let's have a tour",
          link: "https://www.avec-vous-demain.com/",
        },
      ],
    },
    topShape: {
      title: "Top Shape",
      description:
        "My first Android app. It offers some tools to calculate various body mass/shape indexes, and also offers a daily follow up, thus giving to the users the posibility to check their evolution each day.",
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
        "Web Agent is a JavaScript plugin for developers. It is a very simple AI whose purpose is to help UX on websites. It is currently under progress.",
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
