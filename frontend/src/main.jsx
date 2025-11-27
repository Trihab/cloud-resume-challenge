import { createRoot } from 'react-dom/client'
import 'stylesheets/style.css'
import Layout from './Layout.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import ResumePage from 'pages/ResumePage'

createRoot(document.querySelector('main')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<ResumePage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
)
