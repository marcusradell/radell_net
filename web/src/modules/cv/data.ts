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
      "Lead our work on the ambassador portal frontend where we implemented our first design system.",
      "Took lead on stabilizing RabbitMQ, and later migrate to Google Pub/Sub across our teams.",
      "Implemented our automated payouts service in collaboration with our CTO and CPO, reducing the manual work from 20 hours to 15-30 minutes.",
      "Implemented our product registry service as our first microservice with isolated database and at-least-once message guarantees.",
      "Incrementally introduced event sourcing and CQRS via Google pub/sub and Postgres, with at-least-once event publishing guarantees and concurrency protection via event versioning with a lot of expert help from the ES/DDD/CQRS community.",
      "Introduced programmatic migrations and randomized seeding via our API, making sure that the service was easy to get started with and to load test the write - and read -model.",
      "Worked closely with our ops team to setup alive/readiness checks for Kubernetes, graceful shutdown, and above 90% test coverage.",
      "Help coordinate our cross-team on-call system. Making sure that on-call was covered, and on-boarding new employees",
      "Assisting our buyers-side team with regular code reviews, discussing arcchitectual choices and recommending future improvements.",
      "Helped introduce typescript, user story mapping, event storming, and mob programming by hosting weekly practice sessions.",
      "Helped improve our hiring process with feedback from the local programming community, reducing the time it took for candidates to do our code case, and increasing the candidate's impression of our on-site pair/mob-programming session.",
      "Assist with onboarding new employees to make sure they thrive at the company."
    ],
    tags: [
      ["javascript", 1],
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
      ["javascript", 1],
      ["react", 1],
      ["scrum", 1],
      ["testing", 1],
      ["redux", 1],
      ["redux-thunk", 1],
      ["node.js", 2],
      ["rxjs", 2],
      ["open_source", 2]
    ],
    highlights: [
      "Coached our tester to learn integration testing in JavaScript.",
      "Led development on our frontend service layer and how it communicated with our server APIs.",
      "Helped structure our first GraphQL server API in a modular way (before schema stitching)."
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
    tags: [
      ["javascript", 1],
      ["angular", 1],
      ["promises", 1],
      ["lodash", 1],
      ["css", 1],
      ["gulp", 1],
      ["browserify", 1],
      ["node.js", 2],
      ["pair_programming", 2],
      ["tdd", 2],
      ["heroku", 2]
    ],
    highlights: [
      "Created my own gulp + browserify starter kit, publishing it on npm so it was easy to bundle code and get live reload.",
      "Applied MVVM patterns to Angular and wrote reusable components, making code easier for non-angular developers to understand.",
      "Wrote a prototype framework in Angular and node.js which traversed Expressen's HATEOAS API using bluebird Promises.",
      "Worked with styling Expressen's login experience, collaborating with multiple teams.",
      "Translated data from legacy APIs to fit the next gen frontend by using lodash to group, map, and reduce statistical data and then visualize with graphs.",
      "Used Heroku to quickly develop and deploy conceptual Angular components with mock data, making it easier for stakeholders to give feedback."
    ]
  },
  {
    role: "Fullstack developer",
    company: "R2M",
    short_description: "This is where I became awesome!",
    dates: {
      from: [2013, 8],
      to: [2014, 6]
    },
    tags: [
      ["javascript", 1],
      ["angular", 1],
      ["bootstrap", 1],
      ["animate.css", 1],
      ["css", 1],
      ["tdd", 2],
      ["functional_programming", 2],
      ["mssql", 2],
      ["asp.net", 2]
    ],
    highlights: [
      "Made my first two mobile web apps with Angular and bootstrap.",
      "Integrated Angular with a jQuery-based calendar.",
      "Worked closely with stakeholders by presenting cost/benefit analysis and recommending next step for the apps.",
      "Learned about pure functions, applied it to the apps I built, heavily reducing complexity and bugs.",
      "Established a reputation in the company for building 'bug free' apps.",
      "Did my first late-Friday release on a huge project."
    ]
  },
  {
    role: "Fullstack developer",
    company: "DQC",
    dates: {
      from: [2011, 3],
      to: [2013, 8]
    },
    short_description: "First time leading a team.",
    tags: [
      ["c#", 1],
      ["sharepoint", 1],
      ["javascript", 1],
      ["css", 2],
      ["xml", 2],
      ["mvvm", 2],
      ["silverlight", 2],
      ["wpf", 2],
      ["windows_phone", 2]
    ],
    highlights: [
      "Helped team improve their scrum processes by bookkeeping non-measured activities.",
      "Lead a team of 3 interns, acting as scrum master and project leader.",
      "Introduced rotating leadership where the interns got to practice leading scrum.",
      "Managed external stakeholder expectations by setting up a behavior-driven design document, reducing communication incidents.",
      "Worked with military-based timezone convertions in JavaScript.",
      "Learned model-view-viewmodel and explored Silverlight and WPF, which would benefit me later on in Angular."
    ]
  },
  {
    role: "Junior developer",
    company: "Iptor",
    dates: { from: [2010, 1], to: [2011, 3] },
    short_description: ".NET and green screen programming.",
    tags: [
      ["c#", 2],
      [".net", 2],
      ["css", 2],
      ["html", 2],
      ["as400", 2]
    ],
    highlights: []
  },
  {
    role: "Junior developer",
    company: "CAG Mälardalen",
    dates: { from: [2008, 8], to: [2009, 1] },
    short_description: "My first programming job!",
    tags: [
      ["java", 2],
      ["e-commerce", 2],
      ["php", 2],
      ["html", 2],
      ["css", 2],
      ["mysql", 2]
    ],
    highlights: []
  }
];
