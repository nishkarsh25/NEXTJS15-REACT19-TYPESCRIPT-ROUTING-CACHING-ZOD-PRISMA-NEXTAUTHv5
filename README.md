# NEXTJS15-REACT19-TYPESCRIPT-ROUTING-CACHING-ZOD-PRISMA-NEXTAUTHv5-DiscussApp

Welcome to the NEXTJS project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

**Discuss App** is a modern full-stack web application built as a learning project to explore and implement advanced features of the latest web development technologies. It is designed as a discussion platform where users can create topics, post under them, and participate in nested comment threads.

This project was primarily aimed at learning and applying:

- **Next.js 15** for routing, server actions, and optimized rendering strategies  
- **React 19** features like enhanced Suspense and modern rendering patterns  
- **TypeScript** for strong typing and scalable code architecture  
- **Routing and Caching** mechanisms in Next.js for improved UX and performance  
- **Zod** for robust form validation and schema enforcement  
- **Prisma** as the ORM for database access, including **recursive/nested queries** for threaded comments  
- **NextAuth v5** for authentication, session handling, and secure access control

The core highlight of this project is the implementation of **nested Prisma queries** to support recursive comment trees, allowing for replies to replies in a scalable and clean way.

## Features

- **Authentication** using NextAuth v5 (Sign in/out, session persistence)
- **Nested Comments** with recursive rendering (reply to any comment)
- **Topic-based Post Organization** — each post belongs to a specific topic
- **Post Creation Dialog** with form validation via Zod
- **Comment Creation Form** with real-time reply toggling and validation
- **Optimized Routing and Data Fetching** using Next.js 15’s server actions and caching strategies
- **Type-safe Backend Integration** via Prisma and TypeScript
- **Robust Form Handling** with clear error reporting and dynamic feedback
- **Modern UI** built with component-based architecture (Dialog, Buttons, Cards)


## Live Demo

You can try out the live demo of the discuss app [here](https://nextjs-15-react-19-typescript-routing-caching-zod-mgkmkwio2.vercel.app/).
You can try out the live demo of the routing app [here](https://nextjs-15-react-19-typescript-routing-caching-zod-pkc6v4omr.vercel.app/).
You can try out the live demo of the snippets app [here](https://nextjs-15-react-19-typescript-routing-caching-zod-87l6bp9g9.vercel.app/).

## Folder Structure

```
📦 discuss-app/
├── 📁 app/                       # Next.js app directory
│   ├── 📁 api/                   # API routes (e.g., auth, REST endpoints)
│   ├── 📁 topics/                # Dynamic topic routes (e.g., [slug]/page.tsx)
│   ├── 📁 posts/                 # Post-related routes (e.g., [postId]/page.tsx)
│   ├── 📁 search/                # Search result page
│   └── layout.tsx               # Root layout for the app
│   └── page.tsx                 # Home page
│
├── 📁 components/               # Reusable UI and logic components
│   ├── 📁 ui/                   # Shared UI components (Button, Input, Dialog, etc.)
│   ├── 📁 posts/                # Post-related components (PostList, PostCreateForm, etc.)
│   ├── 📁 comments/             # Comment-related components (CommentList, CommentShow, etc.)
│
├── 📁 actions/                  # Server actions (e.g., createPost, createComment, createTopic)
│
├── 📁 lib/                      # Library code and helpers
│   ├── 📁 query/                # Prisma query functions
│   └── prisma.ts               # Prisma client instance
│
├── 📁 styles/                   # Global styles (if any)
│
├── 📁 public/                   # Static assets (images, icons, etc.)
│
├── 📁 prisma/                   # Prisma schema and migrations
│   └── schema.prisma
│
├── 📁 types/                    # Custom TypeScript types (optional)
│
├── .env                         # Environment variables
├── next.config.js               # Next.js configuration
├── package.json
├── tsconfig.json
└── README.md

```


## Screenshots

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-ROUTING-CACHING-ZOD-PRISMA-NEXTAUTHv5/blob/main/ss1.png?raw=true" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-ROUTING-CACHING-ZOD-PRISMA-NEXTAUTHv5/blob/main/ss2.png?raw=true" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-ROUTING-CACHING-ZOD-PRISMA-NEXTAUTHv5/blob/main/ss3.png?raw=true" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-ROUTING-CACHING-ZOD-PRISMA-NEXTAUTHv5/blob/main/ss4.png?raw=true" alt="Screenshot 1" width="1000"> 


## GIF's

<img src="https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-ROUTING-CACHING-ZOD-PRISMA-NEXTAUTHv5/blob/main/ss5.gif?raw=true" alt="Screenshot 1" width="1000"> 



## Technologies Used

- **[Next.js 15](https://nextjs.org/)** – App Router, Routing, Layouts, Server Components  
- **[React 19](https://react.dev/)** – Latest React features with Server and Client Components  
- **[TypeScript](https://www.typescriptlang.org/)** – Type safety across the entire codebase  
- **[Prisma ORM](https://www.prisma.io/)** – Database access and powerful nested queries (e.g., recursive comment fetching)  
- **[NextAuth v5](https://next-auth.js.org/)** – Authentication with Credentials and OAuth strategies  
- **[Zod](https://zod.dev/)** – Schema validation for server actions  
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for styling  
- **[Lucide Icons](https://lucide.dev/)** – Icon library for consistent UI  
- **[useActionState](https://react.dev/reference/react/useActionState)** – React 19 hook used for handling form actions and validation  
- **Caching & Suspense** – Built-in React and Next.js features for performance optimization  



## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-ROUTING-CACHING-ZOD-PRISMA-NEXTAUTHv5.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   

3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

##  How to Use

Once the Discuss App is up and running, here's how you can interact with it:

### Authentication
- Sign in securely using **NextAuth v5** (custom or OAuth provider depending on setup).
- Only authenticated users can create topics, posts, or comments.

### Topics
- Click **"New Topic"** to create a discussion category.
- Each topic contains multiple posts relevant to that category.

### Posts
- Inside a topic, create a new post with a **title** and **content**.
- Posts are listed chronologically and show the number of comments.

### Comments (Nested)
- Comment on a post using the reply form.
- Supports **infinite nesting** (recursive replies) using **nested Prisma queries**.
- Replies are shown as threaded discussions, maintaining conversation context.

### Search
- Use the search bar to look for posts by keyword or topic.

### Performance
- Fast and responsive UI using **React 19** and **Next.js 15** features like **partial pre-rendering** and **server actions**.
- Leveraging **route caching** and **progressive data loading**.

### Validation
- All forms are validated using **Zod** before submission, ensuring data consistency and user feedback.





## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.



## Credits
This project uses the following open-source technologies:

- [Next.js](https://nextjs.org/): A React framework for server-side rendering and static site generation.
  
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
  
- [Shadcn UI](https://shadcn.dev/): A component library for building user interfaces.
  
- [next-themes](https://github.com/pacocoursey/next-themes): A theme management library for Next.js applications.
  
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
  
- [Lucide Icons](https://lucide.dev/): Icon library used for theme toggle icons (Sun and Moon).

## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com



