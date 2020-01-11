export const data = [
  {
    role: "Senior fullstack developer",
    company: "Karma",
    short_description:
      "I worked mostly with establishing microservices patterns across our teams, but also with frontend the design system, testing, improving team processes and cross-team communication with sales and operations.",
    highlights: [
      "Lead developer on the Ambassador portal frontend. Created reusable themes and raised awareness of async state management (loading and error states) in our components.",
      "Lead developer on our event system using RabbitMQ and later Google Pub/Sub. Wrote wrappers that enabled RPC calls, created TypeScript types for pub/sub before the official ones stabilized, benchmarked performance and gave recommendations to our teams based on findings.",
      "Lead developer on the payouts service, reducing our process from days of manual labor to a couple of minutes. The system complexity was reduced by building it in separate modules, making it simple to split into microservices. Incrementally rewrote the reports from html string to React components via serverside rendering to make it simpler to scale to multiple languages.",
      "Internal coding mentor developers.",
      "Lead developer on our product registry service. Incrementally introduced event sourcing and CQRS via Google pub/sub and Postgres, with at-least-once event publishing guarantees and concurrency protection via event versioning with a lot of expert help from the ES/DDD/CQRS community. Introduced programmatic migrations and randomized seeding via our API, making sure that the service was easy to get started with and to load test the write - and read -model. Worked closely with the ops team to setup alive/readiness checks for Kubernetes, graceful shutdown, and above 90% test coverage.",
      "One of the main coordinators of our cross-team on-call system. Making sure that on-call was covered, and on-boarding new employees",
      "Assisting our buyers-side team with regular code reviews, discussing arcchitectual choices and recommending future improvements.",
      "Helped introduce typescript, user story mapping, event storming, and mob programming by hosting weekly practice sessions.",
      "Helped improve our hiring process with feedback from the local programming community, reducing the time it took for candidates to do our code case, and increasing the candidate's impression of our on-site pair/mob-programming session."
    ],
    tags: [
      "microservices",
      "node.js",
      "rxjs",
      "typescript",
      "react",
      "postgres",
      "tdd",
      "event_sourcing",
      "cqrs",
      "io_ts",
      "gcp",
      "mob_programming",
      "user_story_mapping",
      "event_storming",
      "design_systems",
      "rabbitmq",
      "google_pubsub"
    ],
    date: {
      from: "2017-09-01",
      to: "2019-10-01"
    }
  }
];
