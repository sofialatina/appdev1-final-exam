import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

Update src/main.jsx to: 

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from "./app/store";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
