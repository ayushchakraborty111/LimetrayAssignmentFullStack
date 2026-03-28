# 📝 Task Manager App (LimeTray Assignment)

## 🚀 Live Demo

👉 https://limetray-assignment-full-stack.vercel.app/

---

## 📌 Overview

This is a **Task Manager Application** built as part of the LimeTray Full Stack Engineer assignment.
The app allows users to manage tasks efficiently with features like drag-and-drop, filtering, and persistent storage.

---

## ✨ Features

### ✅ Core Features

* Add new tasks
* Mark tasks as completed / pending
* Delete tasks
* Filter tasks (All, Completed, Pending)
* Persistent storage using LocalStorage

---

### ⚛️ React Features

* Custom Hook (`useLocalStorage`) for managing storage
* Context API for global state management (no prop drilling)
* Performance optimizations using:

  * `useMemo`
  * `useCallback`
  * `React.memo`
* Form validation (prevents empty task submission)

---

### 🎯 Advanced Enhancements

* Drag and Drop functionality using `@hello-pangea/dnd` as `react-beautiful-dnd` is depricated
* Column-based layout (Pending / Completed)
* Cross-column drag support
* Task reordering with position persistence
* Task count display in filters
* Icons for better UI clarity

---

### 🎨 UI/UX Features

* Responsive design (mobile-first)
* Dark / Light mode toggle
* Smooth animations for task interactions
* Bootstrap-based layout with custom styling
* Clean and modern card-based UI

---

## 🏗️ Tech Stack

* **Frontend:** React (Vite)
* **State Management:** Context API
* **Styling:** Bootstrap + Custom CSS
* **Drag & Drop:** @hello-pangea/dnd
* **Storage:** LocalStorage
* **Deployment:** Vercel

---

## 📂 Project Structure

```
src/
├── components/
│   ├── TaskForm.jsx
│   ├── TaskItem.jsx
│   ├── TaskList.jsx
│   ├── Column.jsx
│   ├── Filter.jsx
│   ├── Theme.jsx
|   ├── InputField.jsx
│
├── context/
│   └── taskContext.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── App.jsx
├── main.jsx
├── App.css
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/ayushchakraborty111/LimetrayAssignmentFullStack.git
cd LimetrayAssignmentFullStack
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

---

## 📦 Build for Production

```bash
npm run build
npm run preview
```

---

## 🧠 Key Design Decisions

* Used **Context API** to avoid prop drilling and centralize task state
* Implemented **custom hook** for reusable LocalStorage logic
* Switched from grid layout to **column-based drag system** for better DnD accuracy
* Used **memoization techniques** to improve performance
* Combined **Bootstrap + custom CSS** for faster development and better UI control

---

## 🚀 Future Improvements

* Backend integration (Node.js + MongoDB)
* User authentication (JWT)
* Real-time updates (WebSockets)
* Search and sorting functionality

---

## 👨‍💻 Author

**Ayush Chakraborty**
