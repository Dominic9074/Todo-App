# Todo Task Management App

A modern Todo Task Management application built with **React, TypeScript, and Vite**. This project focuses on building a clean, reusable component-based UI while practicing important React concepts such as state management, props, hooks, CRUD operations, and browser storage.

## Features

- Add new tasks with a title and deadline
- Validate task input before adding
- Prevent selecting past dates
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Strike through completed tasks
- Detect overdue tasks
- Highlight overdue tasks with a different UI
- Hide the completion checkbox for overdue tasks
- Toast notifications for validation and overdue tasks
- Persist tasks using `localStorage`
- Restore tasks after page refresh
- Responsive task-card layout using CSS Flexbox
- Reusable React components

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- React Hooks
- Local Storage
- React Toastify

## React Concepts Practiced

This project was built while practicing:

- Components and component composition
- Props and one-way data flow
- Passing functions through props
- State management with `useState`
- Side effects with `useEffect`
- `useRef`
- Conditional rendering
- State immutability
- State batching
- Lifting state up
- Controlled form components
- List rendering and `key` props
- CRUD operations
- Client-side state persistence

## Project Structure

```text
src/
├── components/
│   ├── background/
│   │   └── DotGrid.tsx
│   └── todo/
│       ├── taskForm.tsx
│       ├── taskItem.tsx
│       ├── taskList.tsx
│       ├── EditTaskModel.tsx
│       └── ...
├── types/
│   └── task.interface.ts
├── App.tsx
├── App.css
└── main.tsx