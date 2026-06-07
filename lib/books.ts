type Book = {
  title: string;
  author: string;
  tags: string[];
  description: string;
};

export const books: Book[] = [
  {
    title: "SSH Mastery",
    author: "Michael W. Lucas",
    tags: ["systems", "security", "networking"],
    description:
      "A practical systems book focused on using SSH beyond the basics, from configuration to agents and key management.",
  },
  {
    title: "Functional Programming in Scala",
    author: "Paul Chiusano and Rúnar Bjarnason",
    tags: ["scala", "functional-programming", "software"],
    description:
      "An introduction to functional design, composable abstractions, and using types to structure programs.",
  },
  {
    title: "Asynchronous Programming in Rust",
    author: "Carl Fredrik Samson",
    tags: ["rust", "async", "systems"],
    description:
      "A focused guide to async programming in Rust, covering futures, tasks, executors, and the mental model behind asynchronous systems.",
  },
  {
    title: "The Man from the Future",
    author: "Ananyo Bhattacharya",
    tags: ["history", "computing", "science"],
    description:
      "A biography of John von Neumann and the ideas that influenced computing, mathematics, science, and strategy.",
  },
  {
    title: "Build",
    author: "Tony Fadell",
    tags: ["building", "teams", "decision-making"],
    description:
      "A practical book about building products, teams, and organizations from the perspective of someone who has done it repeatedly.",
  },
  {
    title: "Writing an Interpreter in Go",
    author: "Thorsten Ball",
    tags: ["go", "interpreters", "language-design"],
    description:
      "A hands-on walkthrough of building an interpreter from scratch, one piece at a time.",
  },
  {
    title: "Turn the Ship Around!",
    author: "L. David Marquet",
    tags: ["leadership", "teams", "decision-making"],
    description:
      "A leadership book centered on ownership, intent, and distributing decision-making closer to the work.",
  },
  {
    title: "Measure What Matters",
    author: "John Doerr",
    tags: ["goals", "execution", "teams"],
    description:
      "An introduction to OKRs and the role clear goals can play in aligning teams and organizations.",
  },
  {
    title: "The Rust Programming Language",
    author: "Steve Klabnik and Carol Nichols",
    tags: ["rust", "programming", "systems"],
    description:
      "The official Rust book, covering ownership, borrowing, lifetimes, traits, error handling, and the language's core programming model.",
  },
  {
    title: "The Effective Engineer",
    author: "Edmond Lau",
    tags: ["engineering", "leverage", "career"],
    description:
      "A book about engineering impact, prioritization, and focusing effort where it creates the most leverage.",
  },
  {
    title: "Succeed: How We Can Reach Our Goals",
    author: "Heidi Grant Halvorson",
    tags: ["goals", "psychology", "decision-making"],
    description:
      "A research-backed look at goal setting, motivation, and the behaviors that make progress more likely.",
  },
  {
    title: "Operating System Concepts",
    author: "Abraham Silberschatz, Peter B. Galvin, and Greg Gagne",
    tags: ["operating-systems", "systems", "computer-science"],
    description:
      "A foundational text on operating system design, covering processes, memory, storage, concurrency, and file systems.",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    tags: ["software", "craft", "maintainability"],
    description:
      "A widely discussed book on naming, structure, readability, and the day-to-day habits of writing maintainable code.",
  },
  {
    title: "The C Programming Language",
    author: "Brian W. Kernighan and Dennis M. Ritchie",
    tags: ["c", "systems", "programming"],
    description:
      "A compact classic that introduces C through concise examples and close attention to the language's core ideas.",
  },
];
