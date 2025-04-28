# React Component Communication Example

This is a simple React app demonstrating communication between multiple components. The app features a parent component (`A`) which contains child components (`B`, `C`, and `D`). The components communicate by passing a value (`x`) and a click handler function (`onXClick`) as props to each other.

## Features

- **Parent Component (A)**: Holds the state for `x` and passes it to child components.
- **Child Components (B, C, D)**: Display the value of `x` and allow interaction to modify it.
- **State Management**: The state is managed using React's `useState` hook, and the value of `x` can be incremented by clicking buttons in any of the child components.



## Installation

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/MoinUddin-dev-dot/MultiComponent-Sharing.git
cd your-repo-name
npm i
npm run dev
```