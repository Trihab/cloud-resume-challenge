import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import ResumePage from 'pages/ResumePage'
import ProjectsPage from 'pages/ProjectsPage'
import ProjectPage from 'pages/ProjectPage'
import HomePage from 'pages/HomePage'

createRoot(document.querySelector('main')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/resume' element={<ResumePage />}></Route>
        <Route path='/projects' element={<ProjectsPage />}></Route>
        <Route path='/projects/:id' element={<ProjectPage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
)
