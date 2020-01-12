type TextAndPriority = [string, number];

type DataRow = {
  role: string;
  company: string;
  short_description: string;
  highlights: string[];
  tags: TextAndPriority[];
  dates: {
    from: [number, number];
    to: [number, number];
  };
};

export const data: DataRow[] = [
  {
    role: "Senior fullstack",
    company: "Karma",
    short_description: "Zero food waste generation.",
    highlights: [
      "Lead our work on the ambassador portal frontend. I implemented reusable themes and helped raised awareness of async state management (loading and error states) in our components by collaborating with our designers.",
      "Lead developer on our event system using RabbitMQ and later Google Pub/Sub. Wrote wrappers that enabled RPC calls, created TypeScript types for pub/sub before the official ones stabilized, benchmarked performance and gave recommendations to our teams based on findings.",
      "Lead developer on the payouts service, reducing our process from days of manual labor to a couple of minutes. The system complexity was reduced by building it in separate modules, making it simple to split into microservices. Incrementally rewrote the reports from html string to React components via serverside rendering to make it simpler to scale to multiple languages.",
      "Lead developer on our product registry service. Incrementally introduced event sourcing and CQRS via Google pub/sub and Postgres, with at-least-once event publishing guarantees and concurrency protection via event versioning with a lot of expert help from the ES/DDD/CQRS community. Introduced programmatic migrations and randomized seeding via our API, making sure that the service was easy to get started with and to load test the write - and read -model. Worked closely with the ops team to setup alive/readiness checks for Kubernetes, graceful shutdown, and above 90% test coverage.",
      "Help coordinate our cross-team on-call system. Making sure that on-call was covered, and on-boarding new employees",
      "Assisting our buyers-side team with regular code reviews, discussing arcchitectual choices and recommending future improvements.",
      "Helped introduce typescript, user story mapping, event storming, and mob programming by hosting weekly practice sessions.",
      "Helped improve our hiring process with feedback from the local programming community, reducing the time it took for candidates to do our code case, and increasing the candidate's impression of our on-site pair/mob-programming session.",
      "Assist with onboarding new employees to make sure they thrive at the company."
    ],
    tags: [
      ["microservices", 1],
      ["node.js", 1],
      ["postgres", 1],
      ["react", 1],
      ["typescript", 1],
      ["rxjs", 1],
      ["agile", 1],
      ["google_pubsub", 1],
      ["lean", 1],
      ["gcp", 2],
      ["rabbitmq", 2],
      ["io-ts", 2],
      ["open_source", 2],
      ["tdd", 2],
      ["event_sourcing", 2],
      ["cqrs", 2],
      ["mob_programming", 2],
      ["user_story_mapping", 2],
      ["event_storming", 2],
      ["design_systems", 2]
    ],
    dates: {
      from: [2017, 9],
      to: [2019, 10]
    }
  },
  {
    role: "Senior frontend",
    company: "Linas matkasse",
    dates: {
      from: [2016, 11],
      to: [2017, 8]
    },
    short_description: "Quality food bag subscriptions.",
    tags: [
      ["react", 1],
      ["javascript", 1],
      ["scrum", 1],
      ["testing", 1],
      ["redux", 1],
      ["node.js", 2],
      ["rxjs", 2],
      ["open_source", 2]
    ],
    highlights: [
      "Coached our tester to learn integration testing in JavaScript.",
      "Helped structure GraphQL in a modular way (before schema stitching).",
      "Codeveloped our frontend service layer."
    ]
  },
  {
    role: "Lead backend",
    company: "Qvalia",
    dates: {
      from: [2015, 5],
      to: [2016, 5]
    },
    short_description: "Visionary freemium invoice portal.",
    tags: [
      ["management", 1],
      ["scrum", 1],
      ["aws", 1],
      ["node.js", 1],
      ["tdd", 2],
      ["angular", 2],
      ["react", 2],
      ["rxjs", 2]
    ],
    highlights: [
      "Managed consultants to make sure they deliver on time and budget while maintaining quality.",
      "Heavily reduced our backlog and help set clearer priority based on input from our CEO.",
      "Set coding guidelines for how to work with promises and thin controllers in the backend.",
      "Help debug the Sails open source framework and resolve issues."
    ]
  },
  {
    role: "JavaScript developer",
    company: "Utvecklarbolaget",
    dates: {
      from: [2014, 8],
      to: [2015, 5]
    },
    short_description: "Bye .NET, hello node.js.",
    tags: [],
    highlights: []
  },
  {
    role: "Fullstack developer",
    company: "R2M",
    short_description: "This is where I became awesome!",
    dates: {
      from: [2013, 8],
      to: [2014, 6]
    },
    tags: [],
    highlights: []
  },
  {
    role: "Fullstack developer",
    company: "DQC",
    dates: {
      from: [2011, 3],
      to: [2013, 8]
    },
    short_description: "First time leading a team.",
    tags: [],
    highlights: []
  },
  {
    role: "Junior developer",
    company: "Iptor",
    dates: { from: [2010, 1], to: [2011, 3] },
    short_description: ".NET and green screen programming.",
    tags: [],
    highlights: []
  },
  {
    role: "Junior developer",
    company: "CAG Mälardalen",
    dates: { from: [2008, 8], to: [2009, 1] },
    short_description: "My first job!",
    tags: [],
    highlights: []
  }
];
