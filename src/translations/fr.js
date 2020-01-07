module.exports = {
  header: {
    title: "Alexandre Le Lain",
    menu: {
      cv: "Mon CV",
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
    title: "Bienvenue.",
    description:
      "Découvrez mes projets réalisés avec passion. Et aussi avec beaucoup de café.",
  },
  footer: {
    title: "Me contacter",
    bottom:
      "Fait avec React.js & Gatsby.js avec ❤️ et ☕ par Alexandre Le Lain.",
    mail: "lelain.alexandre@gmail.com",
    twitter: "@a_lelain",
    github: "alexandre-lelain",
    linkedin: "alexandre-lelain",
  },
  projects: {
    cv: {
      title: "Mon Web-CV",
      description:
        "Mon web-cv fait avec ❤ avec React. Vous y trouverez toutes les informations concernant mon expérience, mon diplôme et mes passions.",
      controls: [
        {
          label: "En avant toute!",
          link: "https://alexandre-lelain.github.io/my-website/",
        },
      ],
    },
    componentsExtra: {
      title: "Components-extra",
      description: [
        `Une lib open-source de composants React.`,
        `Basée sur le système de style de styled-components, et sur les standards de material-ui, elle sert à fournir à des développeurs un set de composants dits 'molécules' pour monter un site web rapidement et efficacement.`,
        `La lib suit le pattern compound-components pour offrir une personnalisation optimale.`,
        `Ce site est justement construit avec cette lib! :)`,
      ],
      controls: [
        {
          label: "module npm",
          link: "https://www.npmjs.com/package/components-extra",
        },
        {
          label: "visiter le storybook",
          link: "https://components-extra.netlify.com",
        },
      ],
    },
    jsExtra: {
      title: "Js-extra",
      description: [
        `Fait ce que JavaScript ne fait pas.`,
        `Cette lib open-source disponible sur npm propose des fonctions très utiles qui ne sont pas natives à Javascript. Elle sert de complément à de célèbres librairies comme Lodash ou Underscore.js.`,
        `Écrite en TypeScript, la lib se soit d'être très légère. Il ne faudrait pas allourdir encore plus nos node_modules!`,
      ],
      controls: [
        {
          label: "module npm",
          link: "https://www.npmjs.com/package/js-extra",
        },
        {
          label: "En savoir plus sur son API",
          link: "https://js-extra.netlify.com",
        },
      ],
    },
    avecVousDemain: {
      title: "Avec Vous Demain",
      description: [
        `Un site web vitrine conçu spécialement pour un membre de ma famille afin de faire la promotion de son nouveau livre.`,
        `Le site permet d'avoir un avant-goût du livre en question grâce à quelques extraits, propose une biographie de l'auteur et affiche plusieurs liens vers des plateformes de ventes en ligne pour se procurer le livre.`,
        `Il a été construit avec Gatsby.js pour optimiser le lazy-loading des ressources ainsi que profiter d'une bonne configuration de SEO.`,
      ],
      controls: [
        {
          label: "Visiter le site",
          link: "https://www.avec-vous-demain.com/",
        },
      ],
    },
    topShape: {
      title: "Top Shape",
      description:
        "Ma première application Android. Elle offre tout un tas d'outils permettant aux utilisateurs de calculer divers indices corporels. Elle permet aussi d'avoir un suivi quotidien pour que les utilisateurs visualisent leur évolution en temps réél.",
      controls: [
        {
          label: "Lien GooglePlay",
          link:
            "https://play.google.com/store/apps/details?id=com.all.topshape",
        },
      ],
    },
    agentWeb: {
      title: "Agent Web (alpha d'IDA)",
      description:
        "Agent Web est un plugin JavaScript à destination des développeurs. C'est une petite IA très simple dont le but est d'améliorer l'UX des websites. Ce projet est actuellement en cours.",
      controls: [
        {
          label: "Essayer la démo",
          link: "https://alexandre-lelain.github.io/agentWeb/",
        },
      ],
    },
    wip: {
      title: "Travail en cours",
      description: "De nouveaux projets bientôt...",
    },
  },
}
