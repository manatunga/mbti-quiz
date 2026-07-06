# mbti-quiz: a small personality test
This simple project is a personality quiz that assesses the user's personality (i.e. MBTI type) by presenting them with 28 different scenarios and grades their Jungian cognitive functions and stack to identify the MBTI type that best correlates to their general personality.

The aim of this side project is to mainly consolidate my JavaScript fundamentals, whilst diving into utilising TypeScript's strict static typing and Tailwind CSS's utility classes to style the quiz's frontend.

**Live Demo** : Check out the live demo 👉[here](https://manatunga.github.io/mbti-quiz/)

## 🛠️ Tech Stack
- HTML5, Tailwind CSS, JavaScript, TypeScript

## 💻 Local Setup Instructions
Following are the instructions to installing and running this application locally:

### Prerequisites
Ensure you have [Node.js](https://nodejs.org) installed on your machine.

### Installation and Setup
1. **Clone or Download the Project:**
   Clone the repository using Git:
   ```bash
   git clone https://github.com/manatunga/mbti-quiz.git
   cd mbti-quiz
   ```
2. **Install Dependencies:**
   Run the following command in your terminal to install TypeScript and required packages:
   ```bash
   npm init -y
   npm install --save-dev typescript
   ```
3. **Compile TypeScript to JavaScript:**
   Compile the source code into browser-readable files:
   ```bash
   npx tsc
   ```
   *(Optional: Use `npx tsc --watch` if you plan to modify the code and want it to auto-compile on save).*
   
4. **Run the Application:**
   * Open the project folder in VS Code.
   * Click **Go Live** at the bottom right of the editor (requires the *Live Server* extension) to open `index.html` in your browser.

## 📜 License
Source code is licensed under the [**MIT License**](https://opensource.org/license/mit)