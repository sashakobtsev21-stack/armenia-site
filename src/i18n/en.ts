/**
 * English UI dictionary (SPEC §12).
 * In components, strings come only from the dictionary — hardcoding is forbidden.
 *
 * REMODEL NOTE (Armenia, bootstrap): the long prose blocks (hub intros,
 * insurance/relocation pages, food city pages) are NEUTRAL SCAFFOLD STUBS — honest
 * "section is being prepared" copy, no invented YMYL facts. Detailed, fact-checked
 * prose comes in the content phase (see SPEC.md, docs/new-sites/armenia-plan-*).
 */
import type { UIDictionary } from './types';

export const en: UIDictionary = {
  siteName: 'Armenia Guidebook',
  tagline: 'vetted places, honest tips',
  langName: 'English',
  skipToContent: 'Skip to content',
  backToTop: 'Back to top',
  notFound: {
    heading: 'Page not found',
    text: 'The page you are looking for doesn’t exist or has moved. Use the menu above or head back to the homepage.',
    home: 'Go to homepage',
  },
  liveData: {
    heading: 'Right now in Armenia',
    desc: 'Weather in the main cities — check before you travel.',
    weather: 'Weather',
    sea: 'Lake Sevan',
    fx: 'Dram rate',
    cities: { yerevan: 'Yerevan', gyumri: 'Gyumri', dilijan: 'Dilijan', sevan: 'Sevan' },
    updated: 'updated',
    source: 'weather: open-meteo',
  },
  nav: {
    home: 'Home',
    attractions: 'What to see',
    cities: 'Cities',
    food: 'Food',
    entertainment: 'Entertainment',
    routes: 'Routes',
    planning: 'Before you go',
    transport: 'Transport',
    'car-rental': 'Car rental',
    insurance: 'Insurance',
    news: 'News',
    relocation: 'Relocation',
    about: 'About',
    contact: 'Contact',
  },
  header: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuShort: 'Menu',
    primaryNav: 'Primary navigation',
    menuNav: 'All sections',
  },
  lang: {
    label: 'Language',
    switchTo: 'Switch to {lang}',
  },
  footer: {
    disclaimer:
      'Some links on the site are affiliate links. This does not change the price for you and helps support the project.',
    navHeading: 'Sections',
    note: 'Places are chosen by rating and cross-checked with experienced travelers, guides and locals.',
    creatorPrefix: 'Made by',
    creator: 'KOBTSEV',
  },
  verified: {
    inPlace: 'Verified · {date}',
    short: 'Verified',
    updated: 'Updated · {date}',
    caption: 'by experienced travelers, guides, and locals',
    photoAlt: 'Photo of the place',
    samplePlaceholder: 'date verified',
  },
  home: {
    heroTitle: 'Armenia travel guide: vetted places',
    heroSubtitle:
      'Plan your Armenia trip without the tourist traps: we pick places by rating and cross-check them with guides and locals. Updated regularly.',
    heroCredit: 'Photo: Wikimedia Commons · CC BY-SA',
    photoPrefix: 'Photo',
    search: {
      label: 'Search the site',
      placeholder: 'Where are you headed? Yerevan, Tatev, car rental…',
      emptyNoContent: 'Nothing found yet. Try another word — search runs over the articles already published.',
      emptyNoMatch: 'Nothing found. Try a different query.',
      hint: 'Search runs over already published articles, right in your browser.',
    },
    entriesHeading: 'Where to start',
    tiles: {
      attractions: 'Lakes, mountains, monasteries, fortresses and old towns of Armenia',
      cities: 'City guides: what to see, where to eat, how to get around',
      food: 'What to try and where to eat honestly — without tourist markups',
      entertainment: 'Where to go out: nightlife and bars, festivals, lake beaches, and parks',
      routes: 'Ready-made road trips: a day-by-day plan, budget, and map',
    },
    showcase: {
      heading: 'Armenia showcase',
      lead: 'The best places, routes and vetted venues — Armenia at a glance.',
      partnerNote: 'Includes partner placements.',
      aria: 'Showcase: featured places, routes and venues',
      adKicker: 'Advertising',
      adTitle: 'Place your business here',
      kickers: {
        city: 'City',
        route: 'Route',
        sight: 'See',
        food: 'Food',
        nightlife: 'Nightlife',
        guide: 'Guide',
      },
    },
    allSectionsHeading: 'All sections',
    trustHeading: 'Verified by experienced travelers, guides, and locals',
    trustLead:
      'We don’t rely on memory or old blog posts. Every place is chosen and cross-checked across several sources, so the details stay current.',
    trust: {
      ratingTitle: 'Selected by high ratings',
      ratingText: 'The guide includes places rated 4+★ across several independent sources.',
      localsTitle: 'Confirmed by locals and guides',
      localsText:
        'We check the details with experienced travelers, guides, and locals, not from old blogs.',
      updatedTitle: 'Regular updates',
      updatedText: 'Each article shows the date of its last check — we revisit them by season.',
    },
    badgeSampleHeading: 'What the verification mark looks like',
    sectionsHeading: 'Guide sections',
    freshHeading: 'Latest articles',
    freshEmpty: 'Nothing to show here right now — please check back soon. We keep adding vetted, up-to-date guides.',
    about: {
      heading: 'About the project',
      text: 'Armenia Guidebook is a travel guide to Armenia: attractions, cities, food, routes, and car rental. We pick places by rating, cross-check the facts, and date-stamp every article — here’s how we work.',
      link: 'More about the project',
    },
  },
  newsFeed: {
    recentHeading: 'Latest news',
    all: 'All news',
    recentEmpty: 'No recent news yet.',
  },
  actions: {
    more: 'Read more',
    affiliateDisclosure: 'Affiliate link — the price for you stays the same.',
  },
  breadcrumbs: {
    home: 'Home',
    aria: 'Breadcrumbs',
  },
  hub: {
    listHeading: 'In this section',
    empty:
      'The first articles in this section are coming soon. We’re preparing vetted guides with up-to-date information.',
    sections: {
      attractions: {
        intro: [
          'What to see in Armenia — from the cliff-top monasteries of Khor Virap, Tatev, Geghard and Noravank to Lake Sevan, the forests of Dilijan, ancient fortresses and deep canyons. This section gathers the places worth traveling for, across the whole country.',
          'This section is being prepared. For each attraction we’ll honestly answer the main questions: what to see, how to get there, how much time to set aside, and when to go — with the facts checked against reliable sources.',
        ],
      },
      cities: {
        intro: [
          'Armenia’s cities each have their own character: the capital Yerevan, craft-town Gyumri, forested Dilijan, spa-town Jermuk and the southern gateway Goris. This section will hold city guides: what to see, where to eat honestly, how to get there, and where to stay.',
          'This section is being prepared. Cities are a handy starting point for planning — routes branch out from them, attractions are nearby, and this is where you book a place, pick up a car, and sort out connectivity.',
        ],
      },
      entertainment: {
        intro: [
          'Entertainment in Armenia — beyond monasteries and mountains: Lake Sevan beaches, wine bars and festivals, parks, museums, nightlife and casinos. This section will gather places to relax and have fun across the country’s cities, with what matters in practice: where it is, how much it costs, and when it’s open.',
          'This section is being prepared. Prices and opening hours will be listed per place, so a night out or a day trip is easy to plan ahead.',
        ],
      },
      routes: {
        intro: [
          'Ready-made road trips around Armenia: a day-by-day plan, a budget guideline, key stops, and a map. The country is compact but mountainous — a car opens up the monasteries, Lake Sevan and the south, and Armenia pairs naturally with neighbouring Georgia for a longer Caucasus trip.',
          'This section is being prepared. The mileage, days, and budget in the cards are guidelines, not exact measurements — they depend on the number of stops, the season, and accommodation. Check road conditions before setting off.',
        ],
      },
      transport: {
        intro: [
          'Transport in Armenia — how to get around the country: airports, intercity buses, trains, and transfers. This section will hold practical guides: how to get from point to point, roughly how long it takes, and what the options are.',
          'This section is being prepared. The country’s main gateway is Yerevan’s Zvartnots (EVN) airport, with Gyumri (LWN) as a secondary entry. It’s handy to plan transport together with the “Car rental” and “Routes” sections.',
        ],
      },
      'car-rental': {
        intro: [
          'Car rental in Armenia is one of the most common questions before a trip: where to get a car, how much it costs, whether you need a deposit, and what catches there are in the contracts. This section will break down rental by city and airport and compare the options.',
          'This section is being prepared. Specific prices and terms go out of date fast, so we’ll mark the date they’re current and won’t pass off old figures as fresh.',
        ],
      },
      insurance: {
        intro: [
          'Travel insurance for a trip to Armenia, and for living in the country, is a topic that’s easy to put off and that people regret at the worst possible moment. This section will break down which policies actually work for travelers and relocators, how they differ, and what to look for.',
          'This section is being prepared. Entry and insurance requirements are set by the authorities and can change — we’ll mark the date and link the official source rather than passing off old facts as current.',
        ],
      },
      planning: {
        intro: [
          'Planning a trip to Armenia is what people look up before booking: do you need a visa, when to go, how much money to bring, and what about insurance and safety. This section will give short, practical answers with links to the sections that cover each topic in depth.',
          'This section is being prepared. Regulatory things (visas, insurance) change fast — we’ll mark the date and link the official source rather than passing off old facts as current.',
        ],
      },
      news: {
        intro: [
          'News and updates to the guide: new vetted places, seasonal tips, and changes worth knowing before a trip. Armenia changes — venues open and close, prices shift, new routes appear — and this section keeps the guide up to date.',
          'This section is being prepared. We don’t chase “hot” news for the sake of traffic; entries show a date, so you always know how current the information is.',
        ],
      },
    },
  },
  map: {
    placeHeading: 'On the map',
    placeAria: 'Interactive map with the location of the place',
    placeHint: 'The map loads on click — to keep the page lightweight.',
    show: 'Show map',
    error: 'The map didn’t load. Check your connection and refresh the page.',
    attribution: '© OpenStreetMap contributors',
    openInGoogle: 'Open in Google Maps',
    label: 'Map · Google',
  },
  access: {
    heading: 'Distance',
    km: 'km',
    origins: {
      yerevan: 'Yerevan',
      gyumri: 'Gyumri',
      dilijan: 'Dilijan',
    },
  },
  visit: {
    heading: 'Admission and opening hours',
    price: 'Admission price',
    hours: 'Opening hours',
    checked: 'Details checked',
  },
  gallery: {
    heading: 'Photos',
    dialogName: 'Photo viewer',
    open: 'Open photo',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
  },
  article: {
    tocHeading: 'Contents',
    relatedHeading: 'Read also',
    about: {
      heading: 'How we select and verify places',
      text: 'Places make it into the guide by high ratings across several independent sources and are cross-checked with experienced travelers, guides, and locals. We don’t reprint others’ ratings verbatim and we update articles regularly — each one shows the date it was checked.',
      link: 'More about the project',
    },
    demoNoteHeading: 'An example listing',
    demoNote:
      'This is a sample card for this section — a real venue will appear here with its address, opening hours, prices and our own description. Want your venue featured? Get in touch via the Contact page.',
    demoLabel: 'Example',
  },
  route: {
    summary: {
      days: 'Days on the road',
      daysValue: '{count}',
      distance: 'Distance',
      distanceValue: '≈{km} km',
      budget: 'Budget from',
      season: 'Best season',
    },
    timelineHeading: 'Route day by day',
    timelineAria: 'Route stops in order',
    stopKm: '{km} km from the start',
    stopStart: 'Route start',
    stopStay: 'stop ≈{min} min',
    mapHeading: 'Route map',
    mapHint: 'The map with stops loads on click — to keep the page lightweight.',
    mapAria: 'Interactive route map with stops',
    affiliateHeading: 'A car for this route',
    affiliatePlaceholder:
      'The most convenient way to do this route is by car. How to get a car without surprises is in the “Car rental” section.',
    affiliateNote: 'Get a car for this route — compare prices on Trip.com.',
    affiliateHotelsHeading: 'Where to stay along the route',
    affiliateHotelsNote: 'Overnight stops along the way — hotels and apartments on Trip.com.',
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    demoNote:
      'Mileage, travel time, and budget are rounded guidelines. Before your trip, verify the current figures, prices, and road conditions.',
  },
  about: {
    heading: 'About the project',
    breadcrumb: 'About',
    intro: [
      'Armenia Guidebook is a guide to all of Armenia, in English. We bring together in one place everything you need for a trip: attractions, cities, food, ready-made routes, car rental, insurance, and news. The goal is simple — to help you plan a trip without outdated advice and tourist traps.',
      'We don’t write “from memory” and we don’t retell other people’s articles. The guide has a clear principle: how we select places, how we verify facts, and why each article shows the date it was checked. More on that below.',
    ],
    sections: [
      {
        heading: 'How we select places',
        paragraphs: [
          'Not everything makes it into the guide — only places with high ratings, from 4★ and up, and across several independent sources at that. If a place is rated well in just one place while others are silent or negative about it, that’s not a consensus for us, and we don’t add it.',
          'A high rating from several sources is a filter at the entrance, not a finished article. Then our work begins: our own honest description, a check of the details, and a current date. Thin “tick-the-box” spots with no real value don’t make it into the guide.',
        ],
      },
      {
        heading: 'How we verify facts',
        paragraphs: [
          'We cross-check the details — how to get there, when to go, what to budget time and money for — with experienced travelers, guides, and locals, rather than taking them from blogs five years old. That’s collective verification: several points of view instead of a single opinion.',
          'Each article shows the date of its last check or update. So you immediately know how current the information is. We revisit articles by season: places change, some close, prices and terms drift — the guide should reflect that.',
        ],
      },
      {
        heading: 'Honest about figures and prices',
        paragraphs: [
          'We don’t reprint others’ ratings and review counts verbatim — that’s platform data, and their rules forbid such copying. For us a rating is a selection criterion, not content: to see the current rating and reviews, follow the link to the source or the map.',
          'Prices, opening hours, and terms in our articles are guidelines as of the check date, not a guarantee. Always verify the details that matter for your trip (the rental price, the deposit, the admission cost) on the other side before you pay.',
        ],
      },
      {
        heading: 'How the project runs',
        paragraphs: [
          'Some links on the site are affiliate links: car rental, accommodation, tours, insurance, connectivity. If you follow such a link and book something, we get a small commission from the service. The price for you stays the same — and the project exists and is updated on these funds.',
          'Partnership doesn’t affect selection: a place makes it into the guide for its rating and verification, not because it has an affiliate program. If it’s better or more honest to recommend an option without an affiliate link, we recommend it.',
        ],
      },
    ],
    feedback: {
      heading: 'Spotted an inaccuracy?',
      text: 'The guide lives on updates. If a place has closed, prices or terms have changed — or you want to suggest a good place — write to us. That keeps the information current for everyone.',
      link: 'Go to contact',
    },
  },
  insurance: {
    heading: 'Travel insurance for Armenia',
    breadcrumb: 'Insurance',
    intro: [
      'Travel insurance for a trip to Armenia — this section is being prepared. Below is general, non-binding guidance on what to look for in a policy. Entry and insurance requirements are set by the authorities and can change, so verify the current rules against official sources before your trip.',
      'We don’t pass off unconfirmed figures as facts. When this section is finished, the requirements and services will be backed by primary sources, with the date they were checked.',
    ],
    updatedIso: '2026-06-21',
    callout: {
      heading: 'Verify entry rules before you travel',
      disclaimer:
        'Entry and insurance requirements for Armenia are set by the authorities and may change. This page is general guidance, not legal advice — verify the current rules against official sources before your trip.',
      sourceNote:
        'Primary sources are official resources: the Ministry of Foreign Affairs of Armenia and embassies. We will cite them here as the section is filled in.',
    },
    guideLink: 'In depth: how to choose and buy a policy',
    requirements: {
      heading: 'What to look for in a policy (general)',
      items: [
        'Coverage of medical expenses abroad for the whole duration of your trip.',
        'The policy should cover your entire stay: from the entry date to the exit date.',
        'For active travel — hiking, skiing, watersports — check that the activity is covered; basic plans often exclude it as a separate option.',
        'The policy language is best in English; keep a copy on your phone and in print.',
        'Medical evacuation and repatriation are useful to have included.',
      ],
    },
    penalty: {
      heading: 'Before you rely on “sorting it out on site”',
      paragraphs: [
        'Entry and insurance requirements are set by the authorities and can change. Arrange a policy in advance rather than counting on buying one at the border.',
        'For active travel — trekking, skiing, rafting and other extreme activities — you may need a separate coverage option. Verify coverage terms with the insurer before your trip.',
      ],
    },
    services: {
      heading: 'Where to get a policy',
      lead: 'Below are services travelers commonly use for trip insurance. Whichever you choose, check that the policy covers medical expenses abroad for your whole trip and that the activities you plan are included. Prices depend on age, duration, and coverage, so we give only guidelines.',
      ctaPlaceholder: 'Sign up on the service’s website. Before buying, verify the current terms and rate.',
      items: [
        {
          name: 'SafetyWing (Nomad Insurance)',
          note: 'for digital nomads and long trips',
          text: 'Subscription insurance billed monthly — convenient for those who live abroad or travel for a long time and don’t want to buy a policy for a fixed period. Verify the current terms and coverage before buying.',
        },
        {
          name: 'Online travel insurers',
          note: 'a flexible online option',
          text: 'Online insurance paid by card from anywhere; the policy arrives by email. Coverage is easy to adjust and the limit can be raised. Verify availability and terms for your country of residence before buying.',
        },
        {
          name: 'Comparison aggregators',
          note: 'compare several insurers at once',
          text: 'Comparison services show offers from several insurers and help you pick a policy for the limit and duration you need. The set of insurers and availability change over time — go by the current list on the service itself.',
        },
      ],
    },
    affiliate: {
      title: 'Get SafetyWing insurance',
      note: 'Nomad Insurance billed monthly — convenient for long trips. Before buying, verify the current terms and coverage.',
      label: 'Sign up online',
    },
    notes: {
      heading: 'What’s important to keep in mind',
      items: [
        'Check that the activities you plan (hiking, skiing, watersports) are covered — basic medical plans often add them as a separate option.',
        'Buy the policy before your trip: some services have a “waiting period” and the insurance doesn’t take effect immediately after payment.',
        'Car rental insurance is a separate matter. A medical policy doesn’t cover damage to the car: for the rental you need your own coverage (CDW / collision), arranged together with the rental.',
      ],
      rentalLink: 'More about car rental and its insurance',
    },
    claims: {
      heading: 'What to do in case of a claim',
      items: [
        'Keep your insurer’s assistance service contact (usually a 24/7 phone line or app) — it’s listed in your policy. Save it to your phone before the trip.',
        'If you fall ill or get injured, call the assistance service first whenever possible: many policies require treatment to be pre-authorised. Without it, costs may not be reimbursed.',
        'Keep all documents: bills and payment receipts, discharge notes, diagnoses, referrals and prescriptions. Without supporting documents, reimbursement is difficult.',
        'Check how your policy works: the insurer either pays the clinic directly (direct billing) or you pay yourself and are reimbursed later against your receipts.',
        'Respect the deadline for filing a claim — it’s stated in your policy terms. Don’t delay: late claims are often rejected.',
        'In Armenia the single emergency number is 112. In a serious situation, call for help first and sort things out with the insurer afterwards.',
      ],
    },
    photos: [],
    sources: {
      heading: 'Sources',
      items: [
        'Ministry of Foreign Affairs of Armenia (entry rules) — mfa.am',
        'Your embassy’s travel advice for Armenia.',
      ],
    },
  },
  contacts: {
    heading: 'Contact',
    breadcrumb: 'Contact',
    intro: [
      'The guide stays current thanks in part to readers. If you’ve spotted outdated information, know a good place, or have a question about a trip — tell us.',
      'There are no forms on the site — this is a deliberate choice: less spam and no storing of your personal data. For suggestions, advertising, and any questions, write to us by email — it’s listed below.',
    ],
    reasonsHeading: 'What’s worth writing about',
    reasons: [
      'A place has closed, moved, or its prices and terms have changed — we’ll help update the article.',
      'You want to suggest a vetted place, route, or tip for the guide.',
      'Advertising, collaboration, or a commercial proposal — we’ll discuss placement terms.',
      'You have a trip question you didn’t find an answer to in the articles.',
      'You found an error or inaccuracy in the text.',
    ],
    channels: {
      heading: 'How to get in touch',
      emailLabel: 'Write to us by email:',
      email: 'info@armeniaguidebook.com',
      emailUrl: 'mailto:info@armeniaguidebook.com',
    },
  },
  relocation: {
    heading: 'Relocating to Armenia: how to settle in',
    breadcrumb: 'Relocation',
    uslugi: {
      heading: 'Services for living in Armenia',
      text: 'Real estate agents, cleaning, moving, repairs, documents, translators — a directory of vetted services so you don’t have to dig through chats.',
      cta: 'Open services',
    },
    intro: [
      'Armenia is an affordable Caucasus base for a long stay: a low cost of living, fast internet, a large Russian- and English-speaking community, and easy entry for many nationalities. This section is a practical guide to settling in on the ground — and it’s being prepared.',
      'We start with the non-regulatory things everyone needs: housing, connectivity, banking, transport, insurance. Documents, residence permits, and taxes are regulated by the state and change periodically — for those we give direct links to official sources rather than passing off old facts as current.',
    ],
    updatedIso: '2026-06-21',
    callout: {
      heading: 'Documents and taxes change — verify with the primary source',
      disclaimer:
        'The rules for entry, residence permits, company registration, and taxes in Armenia are revised periodically. Don’t rely on retellings in chats and outdated articles — verify the terms as of the time of your move directly with the government bodies (links below).',
      sourceNote:
        'That’s why we don’t fix specific deadlines, amounts, and requirements here as unchanging, but point you to the official sites — they always have the current version.',
    },
    guides: {
      heading: 'Detailed guides',
      lead: 'In-depth, non-regulatory how-tos for settling in — coming as the section is built out.',
    },
    steps: {
      heading: 'Where to start on the ground',
      items: [
        {
          title: 'Housing for your first weeks',
          text: 'For the first weeks it’s convenient to stay in a hotel or apart-hotel, and look for a long-term rental on the ground, having seen the neighborhood in person. Popular local listing boards include pazar3.mk and reklama5.mk.',
        },
        {
          title: 'SIM card and internet',
          text: 'A local SIM is sold with a passport at operators’ offices — the main networks are A1 and Telekom (Makedonski Telekom). Mobile internet is inexpensive and Wi-Fi is widespread in the cities.',
        },
        {
          title: 'Bank account',
          text: 'Accounts for foreigners are opened by the major banks. Requirements and check times vary, so verify the document set and terms at a branch in advance.',
        },
        {
          title: 'Long-term rental',
          text: 'Leases usually run 6–12 months, with a deposit most often equal to one month. Prices depend on the city and area — central Yerevan is the priciest. Check the meters, the internet, and who pays for utilities.',
        },
        {
          title: 'Transport and getting around',
          text: 'In the cities there’s cheap public transport; between cities — intercity buses. For freedom of movement many rent a car — how that works is in our rental section.',
        },
        {
          title: 'Health and insurance',
          text: 'There are public and private clinics. For the move and for trips, medical insurance with coverage abroad is convenient — options are in our insurance section.',
        },
        {
          title: 'Daily life and money',
          text: 'The currency is the Armenian dram (AMD), pegged to the euro (about 61.5 AMD per €1). Cards are accepted in the cities; cash is handy in smaller towns. English gets you a long way in tourist areas.',
        },
      ],
    },
    affiliate: {
      title: 'Where to stay the first weeks',
      note: 'Hotels and apartments for your first weeks in Armenia — compare prices on Trip.com.',
      label: 'Find a place for your first weeks',
    },
    esim: {
      title: 'eSIM with internet for your first days',
      note: 'Mobile internet from arrival, until you get a local SIM — the eSIM activates online.',
      label: 'Buy an eSIM for Armenia',
    },
    links: {
      heading: 'What’s already on the site',
      lead: 'Practical sections that come in handy when relocating:',
      items: [
        { section: 'insurance', text: 'medical insurance with coverage abroad' },
        { section: 'car-rental', text: 'car rental: how, where, and without overpaying' },
        { section: 'transport', text: 'how to get there and travel between cities' },
        { section: 'cities', text: 'Armenia’s cities — where to live and what’s nearby' },
        { section: 'food', text: 'where to eat: vetted places by city' },
      ],
    },
    regulatory: {
      heading: 'Documents, visas, and taxes: official sources',
      lead: 'For these topics we point you straight to government sites — they have the current rules, deadlines, and amounts. We’ll prepare separate breakdowns relying on these same sources.',
      items: [
        {
          topic: 'Visa, visa-free entry, and length of stay',
          org: 'MFA of Armenia',
          url: 'https://www.mfa.am/en/',
        },
        {
          topic: 'Residence permit',
          org: 'Migration and Citizenship Service',
          url: 'https://www.migration.am/',
        },
        {
          topic: 'Taxes',
          org: 'State Revenue Committee',
          url: 'https://www.src.am/en',
        },
        {
          topic: 'Registering a company',
          org: 'State Register (e-register)',
          url: 'https://www.e-register.am/en/',
        },
        {
          topic: 'Government services',
          org: 'e-Government of Armenia',
          url: 'https://www.e-gov.am/en/',
        },
      ],
      linkLabel: 'official site',
    },
    notes: {
      heading: 'Nuances people ask about',
      items: [
        'The official language is Armenian, but Russian is widely spoken and English gets you a long way in tourist areas and Yerevan.',
        'The money is the Armenian dram (AMD). We show the current rate on the home page in the “Right now in Armenia” block.',
        'Internet and connectivity are inexpensive and fast in the cities — a strong point for remote work.',
        'Housing in central Yerevan is the most expensive; prices ease in the regions and outside the summer season.',
      ],
    },
    sources: {
      heading: 'Official sources',
      items: [
        'MFA of Armenia (visa, entry) — mfa.am',
        'Migration and Citizenship Service (residence permit) — migration.am',
        'State Revenue Committee (taxes) — src.am',
        'State Register (company registration) — e-register.am',
        'e-Government of Armenia — e-gov.am',
      ],
    },
  },
  eda: {
    heading: 'Where to eat in Armenia',
    lead: 'Restaurants, cafes, wine bars, bakeries and markets — by city. Each place has its address, hours, our honest write-up and a link to the map.',
    breadcrumbHome: 'Home',
    filtersLegend: 'Place filters',
    filters: {
      cityLabel: 'City',
      districtLabel: 'District',
      cuisineLabel: 'Cuisine',
      priceLabel: 'Price level',
      anyOption: 'Any',
      reset: 'Reset filters',
    },
    cuisineKeys: {
      armenian: 'Armenian',
      caucasian: 'Caucasian',
      grill: 'Khorovats (grill)',
      wine: 'Wine bar',
      brandy: 'Brandy & cognac',
      cafe: 'Café',
      bakery: 'Bakery',
      vegetarian: 'Vegetarian',
      street: 'Street food',
      bar: 'Bar',
    },
    priceHint: 'Price level: $ — cheap, $$ — mid-range, $$$ — above average.',
    sponsoredBadge: 'Partner',
    illustrativeBadge: 'Illustration',
    dishesLabel: 'Prices for main dishes',
    dishesHint: 'a guideline, check on site',
    hoursLabel: 'Opening hours',
    cuisineGuide: 'What to try in Armenia: a guide to the cuisine',
    lodgingHeading: 'Where to stay in Armenia',
    lodgingInCity: 'Where to stay in {city}',
    lodgingNote: 'Hotels and apartments near the best places — compare on Trip.com.',
    onMap: 'On the map',
    onMapAria: 'Open “{name}” on the map (in a new tab)',
    website: 'Website',
    resultsCount: 'Places shown: {count}',
    emptyFiltered: 'Nothing matches the selected filters. Reset some of the conditions.',
    emptyNoData: 'This section is being filled in: vetted places with honest descriptions and a check date will appear here soon.',
    selectionHeading: 'How we pick these places',
    selectionNote:
      'Places make it here on merit: we take venues with high ratings (4+★) across several sources and cross-check them with experienced travelers, guides and locals. A rating is a selection criterion, not the write-up itself — we don’t reprint other sites’ scores word for word; see the exact rating on the map. We write every description ourselves. The gold medal on a card is our seal of quality: only places we have checked in person that meet a high standard receive it.',
    cityPages: {
      navHeading: 'Where to eat, by city',
      picksHeading: 'Our vetted places',
      backToAll: 'The whole “Where to eat” directory',
      cityGuideLink: 'City guide',
      items: {
        yerevan: {
          cityName: 'Yerevan',
          heading: 'Yerevan restaurants & cafes',
          lead: 'Yerevan is the capital and the country’s biggest food scene — from khorovats grills and the GUM market to wine bars and cafes. This page is being prepared.',
          intro: [
            'This page is being prepared. We’ll gather vetted places in Yerevan by district and occasion — traditional Armenian fare, grills, wine and coffee.',
            'Each venue will be verified, with the check date noted. What exactly to order will be in the guide to the cuisine.',
          ],
        },
        gyumri: {
          cityName: 'Gyumri',
          heading: 'Gyumri restaurants & cafes',
          lead: 'Gyumri, Armenia’s second city, is known for its craft traditions, old quarters and hearty Shirak cooking. This page is being prepared.',
          intro: [
            'This page is being prepared. We’ll gather vetted places in Gyumri — taverns, bakeries and cafes around the historic centre.',
            'Each venue will be verified, with the check date noted. For the basic dishes of Armenian cuisine, see the guide to the cuisine.',
          ],
        },
        dilijan: {
          cityName: 'Dilijan',
          heading: 'Dilijan restaurants & cafes',
          lead: 'Dilijan, “Armenia’s Switzerland,” pairs forest scenery with cosy cafes and lake terraces nearby. This page is being prepared.',
          intro: [
            'This page is being prepared. We’ll gather vetted places in Dilijan — cafes, taverns and grills near the centre and the national park.',
            'Each venue will be verified, with the check date noted. What to try first will be in the guide to the cuisine.',
          ],
        },
      },
    },
  },
  attractionTypes: {
    'mountains-nature': 'Mountains and nature',
    'lakes-canyons': 'Lakes and canyons',
    caves: 'Caves',
    'churches-monasteries': 'Churches and monasteries',
    'fortresses-castles': 'Fortresses and castles',
    'spa-resorts': 'Spa and resort towns',
    'museums-urban': 'Museums and city sights',
  },
  regions: {
    central: 'Central Armenia & Yerevan',
    southern: 'Southern Armenia',
    northern: 'Northern Armenia',
  },
  razvlTypes: {
    nightlife: 'Nightlife',
    events: 'What’s on',
    active: 'Active leisure',
    casino: 'Casinos',
    places: 'Places',
  },
  serviceRubrics: {
    'housing-realtors': 'Housing and real estate agents',
    cleaning: 'Cleaning',
    moving: 'Moving and freight',
    repairs: 'Repairs and tradespeople',
    documents: 'Documents and lawyers',
    translators: 'Translators and notary services',
  },
  entertainment: {
    filtersLegend: 'Entertainment filters',
    typeLabel: 'Type',
    anyOption: 'Any',
    reset: 'Reset filters',
    resultsCount: 'Shown: {count}',
    listHeading: 'Where to go out',
    emptyFiltered: 'Nothing yet for the selected type. Reset the filter.',
  },
  catalog: {
    heading: 'What to see in Armenia',
    intro: [
      'A catalog of Armenia’s attractions: lakes and mountains, waterfalls and canyons, ancient churches and monasteries, fortresses, and thermal resorts. Filter them by type and region below and open a card with the details.',
      'This section is being prepared. Places make it into the catalog by high ratings across several independent sources, with the details checked — not “from an old blog from memory.” Every article will show the date of its last check.',
    ],
    breadcrumbHome: 'Home',
    mapHeading: 'All places on the map',
    mapAria: 'Interactive map of Armenia’s attractions',
    mapHint: 'The map with all the markers loads on click — to keep the page lightweight.',
    filtersLegend: 'Attraction filters',
    typeLabel: 'Type',
    regionLabel: 'Region',
    anyOption: 'Any',
    reset: 'Reset filters',
    resultsCount: 'Places shown: {count}',
    listHeading: 'Attractions',
    emptyFiltered: 'Nothing matches the selected filters. Reset some of the conditions.',
    emptyNoData: 'This section is being filled in: vetted places with honest descriptions and a check date will appear here soon.',
  },
  uslugi: {
    heading: 'Services in Armenia: for living and relocating',
    breadcrumb: 'Services',
    intro: [
      'Services that those living in Armenia and those relocating need: real estate agents and help with housing, cleaning, freight, repairs, paperwork, translators. Conveniently gathered in one place — by category and city.',
      'We add to this section as requests come in. Paid placements are marked with a gold border; everything else we add once we’ve verified the service.',
    ],
    rubricLabel: 'Category',
    anyOption: 'Any',
    reset: 'Reset filters',
    filtersLegend: 'Service filters',
    resultsCount: 'Services shown: {count}',
    listHeading: 'Services',
    contactLabel: 'Contact',
    siteLabel: 'Website',
    demoLabel: 'Sample',
    emptyFiltered: 'Nothing yet for the selected category. Reset the filter.',
    emptyNoData: 'This section is being filled in: vetted services for living in Armenia will appear here soon.',
    ctaHeading: 'Is your service here?',
    ctaText: 'Real estate agents, cleaning, tradespeople, and other services for those living in Armenia — write to us and we’ll tell you about placement.',
    ctaLabel: 'Ask about placement',
  },
  coordCopy: {
    label: 'Coordinates',
    copy: 'Copy',
    copied: 'Copied',
    copyAria: 'Copy coordinates {coords}',
  },
  hubAffiliate: {
    'car-rental': {
      title: 'Car rental in Armenia',
      note: 'Compare rental prices on Trip.com.',
    },
    transport: {
      title: 'Flights to Armenia',
      note: 'Search flights and fares on Trip.com.',
    },
    cities: {
      title: 'Where to stay',
      note: 'Hotels and apartments across Armenia on Trip.com.',
    },
    entertainment: {
      title: 'Tours & activities',
      note: 'Find tours and activities across Armenia on Trip.com.',
    },
  },
};
