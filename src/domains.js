const DOMAINS = [
  {
    offer: "free",
    url: ["www.cv-semplice.com", "cv-semplice.com", "cv-semplice.local"],
    googleAdsId: "AW-10854202946",
    googleAnaliticsId: "UA-115340529-22",
    googleConversionTag: "AW-10854202946/stkkCOPylaIDEML817co",
    locale: "it",
    site: {
      title: "CV Semplice",
      slug: "cv-semplice",
      legalDocsSlug: "cv-ita",
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
      legalDocsSlug: "cv-rapide",
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
    googleAdsId: "AW-10854202946",
    googleAnaliticsId: "UA-115340529-22",
    googleConversionTag: "AW-10854202946/stkkCOPylaIDEML817co",
    locale: "it",
    site: {
      title: "Mio Curriculum",
      slug: "mio-curriculum",
      legalDocsSlug: "cv-ita",
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
    googleAdsId: "AW-10884793507",
    googleAnaliticsId: "UA-115340529-28",
    googleConversionTag: "AW-10884793507/fO7rCJ7m2LMDEKOJo8Yo",
    locale: "fr",
    site: {
      title: "CV Immediat",
      slug: "cv-immediat",
      legalDocsSlug: "cv-immediat",
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
