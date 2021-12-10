const DOMAINS = [
  {
    offer: "free",
    url: ["cv-semplice.com", "cv-semplice.local"],
    googleAdsId: "cv-semplice-1",
    googleAnaliticsId: "cv-semplice-2",
    googleConversionTag: "cv-semplice-3",
    site: {
      title: "CV Semplice",
      favicon: "favicon-cv-semplice.svg",
      htmlAttrs: {
        title: "CV Semplice",
        description: "CV Semplice",
        keywords: "CV Semplice",
      },
    },
  },
  {
    offer: "paid",
    url: ["mio-curriculum.com", "mio-curriculum.local"],
    googleAdsId: "mio-curriculum-1",
    googleAnaliticsId: "mio-curriculum-2",
    googleConversionTag: "mio-curriculum-3",
    site: {
      title: "Mio Curriculum",
      favicon: "favicon-mio-curriculum.svg",
      htmlAttrs: {
        title: "Mio Curriculum",
        description: "Mio Curriculum",
        keywords: "Mio Curriculum",
      },
    },
  },
];

export const currentDomain = () => {
  const host = window.location.hostname;
  const domain = DOMAINS.find((d) => d.url.includes(host));
  return domain;
};
