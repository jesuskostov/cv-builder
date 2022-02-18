const DOMAINS = [
  {
    offer: "free",
    url: ["www.cv-rapide.com", "cv-semplice.com", "cv-semplice.local"],
    googleAdsId: "cv-semplice-1",
    googleAnaliticsId: "cv-semplice-2",
    googleConversionTag: "cv-semplice-3",
    locale: "it",
    site: {
      title: "CV Semplice",
      slug: "cv-semplice",
      favicon: require("./assets/images/favicon-cv-semplice.svg"),
      htmlAttrs: {
        title: "CV Semplice",
        description: "CV Semplice",
        keywords: "CV Semplice",
      },
    },
  },
  {
    offer: "free",
    url: ["www.cv-rapide.com", "cv-rapide.com", "cv-rapide.local"],
    googleAdsId: "cv-rapide-1",
    googleAnaliticsId: "cv-rapide-2",
    googleConversionTag: "cv-rapide-3",
    locale: "fr",
    site: {
      title: "CV Rapide",
      slug: "cv-rapide",
      favicon: require("./assets/images/favicon-cv-semplice.svg"),
      htmlAttrs: {
        title: "CV Rapide",
        description: "CV Rapide",
        keywords: "CV Rapide",
      },
    },
  },

  {
    offer: "paid",
    url: [
      "www.mio-curriculum.com",
      "mio-curriculum.com",
      "mio-curriculum.local",
    ],
    googleAdsId: "mio-curriculum-1",
    googleAnaliticsId: "mio-curriculum-2",
    googleConversionTag: "mio-curriculum-3",
    locale: "it",
    site: {
      title: "Mio Curriculum",
      slug: "mio-curriculum",
      favicon: require("./assets/images/favicon-mio-curriculum.svg"),
      htmlAttrs: {
        title: "Mio Curriculum",
        description: "Mio Curriculum",
        keywords: "Mio Curriculum",
      },
    },
  },

  {
    offer: "paid",
    url: ["www.cv-immediat.com", "cv-immediat.com", "cv-immediat.local"],
    googleAdsId: "cv-immediat-1",
    googleAnaliticsId: "cv-immediat-2",
    googleConversionTag: "cv-immediat-3",
    locale: "fr",
    site: {
      title: "CV Immediat",
      slug: "cv-immediat",
      favicon: require("./assets/images/favicon-mio-curriculum.svg"),
      htmlAttrs: {
        title: "CV Immediat",
        description: "CV Immediat",
        keywords: "CV Immediat",
      },
    },
  },
];

export const currentDomain = () => {
  const host = window.location.hostname;
  const domain = DOMAINS.find((d) => d.url.includes(host));
  return domain;
};
