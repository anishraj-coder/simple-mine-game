

---

# 📝 Diamond Hunt

> _A React + Zustand Minesweeper-style game experience built with Vite and TypeScript._

---

## 📖 Overview

**Diamond Hunt** is a sleek, interactive take on the classic Minesweeper game — but with a sparkling twist 💎. Instead of searching for empty tiles and avoiding mines, players hunt for **diamonds** while avoiding **bombs**. It’s simple, responsive, and designed with clean architecture and smooth animations.

Whether you're here to explore modern state management with Zustand, styling with Tailwind, or just build a fun game — you're in the right place!

---

## ✨ Features

### 🎮 1. Modern Minesweeper Mechanic
- 4x4 grid-based gameboard.
- Click to reveal cells:
  - 💎 = Points.
  - 💣 = Game over.

### ⚙️ 2. Dynamic Probability Control
- Set your own challenge.
- Determine how likely diamonds are to appear (0–100%) before you start the game.

### 🧠 3. Persistent State Management
- Game state is managed via **Zustand** with:
  - **DevTools** middleware for debugging.
  - **Persistence** middleware to store the highest score.

### 🧭 4. Navigation with React Router
- `/` → Enter game probability and start.
- `/game` → Play the game, view your score and uncover cells.

### 🎨 5. Stylish, Dark-Themed UI
- Tailwind CSS 4 with a custom dark color scheme.
- Uses a custom **Gilroy** font family.
- Smooth transitions with `motion` animations.
- Fully responsive layout across devices.

### 🔍 6. Type Safety & Code Quality
- **TypeScript** throughout for robust and reliable code.
- **ESLint** with a clean config using `@eslint/js` and `typescript-eslint`.
- Custom rules and organizational standards for scalability.

---

## 🧑‍💻 Tech Stack

### 🖥️ Frontend
| Tech            | Purpose |
|-----------------|---------|
| `React 19`      | UI components & rendering |
| `TypeScript`    | Type-safe logic |
| `Zustand`       | Global state: game logic, session data |
| `React Router 7`| Navigation between routes |
| `Tailwind CSS`  | Utility-based custom styling |
| `motion`        | Animation library for transitions |

### ⚙️ Tooling & Build
| Tool            | Usage |
|-----------------|-------|
| `Vite`          | Fast dev server, HMR, optimized builds |
| `ESLint`        | Code quality, error prevention |
| `typescript-eslint` | Type linting and best practices |
| `SWC/Babel` (via Vite) | Fast transpilation and JSX support |

---

## 📸 Preview

### 🧮 Setup Screen
![Setup Screen](public/screenshots/home-screen.png)

### 🎯 Gameplay Grid
![Game in Progress](public/screenshots/game-in-progress.png)

### 💥 Game Over
![Game Over](public/screenshots/game-over.png)

---

## 📁 Project Structure

```bash
mine-game/
├── public/
│   ├── Assets/Fonts/             # Gilroy font files
│   └── screenshots/              # Preview images
├── src/
│   ├── Components/               # UI elements: Header, GridWrapper, Cell
│   ├── Pages/                    # Game start screen
│   ├── Routes/                   # React Router definitions
│   ├── Store/                    # Zustand store for game state
│   └── App.tsx                   # Main gameplay screen
├── index.html                    # HTML template
├── vite.config.ts                # Vite and plugin config
├── tsconfig.*.json               # TS configurations
├── package.json                  # Dependencies and scripts
└── README.md                     # You're reading it!
```

---

## 💻 How to Run Locally

### ✅ Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

---

### 🧪 Setup Steps

#### 🔁 1. Clone the repository

```bash
git clone https://github.com/anishraj-coder/simple-mine-game.git
cd mine-game
```

#### 📦 2. Install dependencies

```bash
npm install
```

#### ⚙️ 3. Start development server

```bash
npm run dev
```

This will launch the app at:  
👉 `http://localhost:5173`

You should now:
- Set a probability (%) on the home screen.
- Click **Submit** to start hunting for diamonds!

---

### 🛠️ Build Commands

To build and preview the production code:

```bash
# Build
npm run build

# Preview production build locally
npm run preview
```

---

### 🧹 Lint the Code

Run ESLint across the project with:

```bash
npm run lint
```

---

## 🌟 Live Demo

Start playing instantly — no install required:  
👉 **[https://diamond-hunt.netlify.app](https://diamond-hunt.netlify.app/)**

---

## 📚 Key References

- 📦 Zustand Middleware: [https://zustand-demo.pmnd.rs/](https://zustand-demo.pmnd.rs/)
- 🔨 Vite Docs: [https://vitejs.dev/](https://vitejs.dev/)
- 🧭 React Router v7: [https://reactrouter.com/](https://reactrouter.com/)
- 🎨 Tailwind CSS Docs: [https://tailwindcss.com/](https://tailwindcss.com/)

---

## 🧠 Gameplay & UI Notes

- **Diamond vs Bomb**:
  - 💎 = +10 points
  - 💣 = Game ends

- **Score Persistence**:
  - Highest score is stored in `localStorage`.

- **Design Considerations**:
  - The dark theme uses accessible color contrasts.
  - Responsive layout adapts across devices.
  - No-gameplay-state errors are handled via route guards.

---

## 🤝 Contributing

Want to improve Diamond Hunt or use it as a base project?

1. Fork the repo
2. Create a feature branch
3. Open a PR with detailed description!

Issues and feedback are always welcome 💬

---

## 📌 Final Thoughts

This project serves as a **fun + educational** playground to explore:

- Modern React architecture
- Lightweight, scalable state management
- Full TypeScript support from build to runtime
- Tailwind-based UI with animation

Perfect as a weekend project or a study tool!  
Tap into that grid... and may your diamonds outshine the bombs 💣🔥💎

---

🛠 Built & maintained with care  
👤 **Author**: [Anish Raj](https://github.com/anishraj-coder)  
📅 Last Updated: July 2025

