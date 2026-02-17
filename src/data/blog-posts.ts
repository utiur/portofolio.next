import { BlogPost } from "@/types"

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 14",
    description: "A comprehensive guide to building modern web applications with Next.js 14 and App Router.",
    content: `
# Getting Started with Next.js 14

Next.js 14 brings exciting new features and improvements to the React framework. In this guide, we'll explore the key concepts and build a modern web application.

## What's New in Next.js 14?

- Server Actions
- Partial Prerendering
- Improved Performance
- Better Developer Experience

## Setting Up Your Project

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Understanding App Router

The App Router is the new way to build applications in Next.js. It uses file-system routing and supports React Server Components by default.

## Server Components vs Client Components

Server Components render on the server and reduce the amount of JavaScript sent to the client. Client Components are interactive and use React hooks.

## Conclusion

Next.js 14 is a powerful framework for building modern web applications. Start building today!
    `,
    date: new Date("2024-01-10"),
    readingTime: 5,
    tags: ["Next.js", "React", "Web Development"],
    author: "Your Name",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for 2024",
    description: "Learn the essential TypeScript patterns and practices to write better, more maintainable code.",
    content: `
# TypeScript Best Practices for 2024

TypeScript has become the standard for JavaScript development. Here are the best practices to follow.

## Type Definitions

Always define explicit types for your functions and interfaces.

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
}

function getUser(id: string): User {
  // implementation
}
\`\`\`

## Utility Types

Leverage TypeScript's built-in utility types.

- Partial<T>
- Required<T>
- Readonly<T>
- Pick<T, K>
- Omit<T, K>

## Type Guards

Use type guards to narrow down types at runtime.

\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}
\`\`\`

## Conclusion

Following these practices will help you write better TypeScript code.
    `,
    date: new Date("2024-02-15"),
    readingTime: 7,
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    author: "Your Name",
  },
  {
    slug: "building-apis-with-nodejs",
    title: "Building RESTful APIs with Node.js and Express",
    description: "A step-by-step tutorial on creating scalable REST APIs using Node.js and Express.",
    content: `
# Building RESTful APIs with Node.js and Express

Learn how to build production-ready REST APIs with Node.js and Express.

## Project Setup

\`\`\`bash
mkdir my-api
cd my-api
npm init -y
npm install express
\`\`\`

## Basic Server

\`\`\`typescript
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

## RESTful Routes

- GET /users - Get all users
- GET /users/:id - Get a specific user
- POST /users - Create a new user
- PUT /users/:id - Update a user
- DELETE /users/:id - Delete a user

## Conclusion

Building APIs with Node.js and Express is straightforward and powerful.
    `,
    date: new Date("2024-03-20"),
    readingTime: 8,
    tags: ["Node.js", "Express", "API", "Backend"],
    author: "Your Name",
  },
  {
    slug: "css-animations-guide",
    title: "Mastering CSS Animations and Transitions",
    description: "Create stunning animations and transitions using pure CSS and modern techniques.",
    content: `
# Mastering CSS Animations and Transitions

Learn how to create beautiful animations using CSS.

## Transitions

Transitions are for simple state changes.

\`\`\`css
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: darkblue;
}
\`\`\`

## Keyframe Animations

Keyframe animations are for complex, multi-step animations.

\`\`\`css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.element {
  animation: fadeIn 0.5s ease-in;
}
\`\`\`

## Performance Tips

- Use transform and opacity for better performance
- Avoid animating layout properties
- Use will-change sparingly

## Conclusion

CSS animations are powerful and performant when used correctly.
    `,
    date: new Date("2024-04-10"),
    readingTime: 6,
    tags: ["CSS", "Animations", "Frontend"],
    author: "Your Name",
  },
  {
    slug: "database-design-fundamentals",
    title: "Database Design Fundamentals for Developers",
    description: "Understanding the core principles of database design and normalization.",
    content: `
# Database Design Fundamentals

Learn the essential concepts of database design.

## Normalization

Normalization is the process of organizing data to reduce redundancy.

### First Normal Form (1NF)
- Eliminate repeating groups
- Create separate tables for related data

### Second Normal Form (2NF)
- Remove partial dependencies
- All non-key attributes depend on the entire primary key

### Third Normal Form (3NF)
- Remove transitive dependencies
- Non-key attributes depend only on the primary key

## Relationships

- One-to-One
- One-to-Many
- Many-to-Many

## Indexing

Indexes improve query performance but add overhead to writes.

## Conclusion

Good database design is crucial for application performance and scalability.
    `,
    date: new Date("2024-05-05"),
    readingTime: 9,
    tags: ["Database", "SQL", "Backend"],
    author: "Your Name",
  },
  {
    slug: "testing-react-applications",
    title: "Testing React Applications: A Complete Guide",
    description: "Comprehensive approach to testing React components and applications using Jest and React Testing Library for production-grade quality assurance.",
    content: `
# Testing React Applications: Production-Grade Quality Assurance

Implementing robust testing strategies for React applications to ensure code reliability, maintainability, and defect prevention in production environments.

## Testing Architecture

Establish a comprehensive testing pyramid covering unit tests, integration tests, and end-to-end tests to validate application behavior at multiple levels.

## Environment Configuration

\`\`\`bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest @testing-library/user-event
\`\`\`

## Component Testing Strategy

\`\`\`typescript
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with correct text and accessibility attributes', () => {
  render(<Button variant="primary">Submit</Button>);
  const button = screen.getByRole('button', { name: 'Submit' });
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute('type', 'submit');
});
\`\`\`

## User Interaction Testing

\`\`\`typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('increments counter value on user interaction', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  
  const incrementButton = screen.getByRole('button', { name: /increment/i });
  await user.click(incrementButton);
  
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
\`\`\`

## Testing Best Practices

- Test user behavior and expected outcomes, not implementation details
- Utilize semantic queries (getByRole, getByLabelText) for accessibility
- Maintain test independence and isolation
- Implement meaningful test names that describe the behavior being tested
- Keep tests focused and maintainable

## Quality Assurance Impact

Comprehensive testing reduces production defects by up to 80%, accelerates development velocity through confident refactoring, and ensures consistent user experience across application updates.
    `,
    date: new Date("2024-06-15"),
    readingTime: 10,
    tags: ["React", "Testing", "Quality Assurance", "Jest"],
    author: "Your Name",
  },
]