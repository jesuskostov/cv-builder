const DOMAINS = [
  {
    offer: 'free',
    url: ['cv-semplice.com', 'cv-semplice.local'],
    googleAdsId: 'cv-semplice-1',
    googleAnaliticsId: 'cv-semplice-2',
    googleConversionTag: 'cv-semplice-3',
    site: {
      title: 'Fin Du cv-semplice',
      htmlAttrs: {
        title: 'Fin Du cv-semplice',
        description: 'Fin Du cv-semplice',
        keywords: 'Fin Du cv-semplice',
      },
    },
  },
  {
    offer: 'paid',
    url: ['mio-curriculum.com', 'mio-curriculum.local'],
    googleAdsId: 'mio-curriculum-1',
    googleAnaliticsId: 'mio-curriculum-2',
    googleConversionTag: 'mio-curriculum-3',
    site: {
      title: 'Fin Du mio-curriculum',
      htmlAttrs: {
        title: 'Fin Du mio-curriculum',
        description: 'Fin Du mio-curriculum',
        keywords: 'Fin Du mio-curriculum',
      },
    },
  },
];

export const currentDomain = () => {
  const host = window.location.hostname
  const domain = DOMAINS.find((d) => d.url.includes(host))
  return domain
}