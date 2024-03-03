import { Routes, Route } from 'react-router';
import AboutMe from './pages/About';
import ResumeDownload from './pages/Resume';
import Form from './pages/Contact';
import Portfolio from './pages/Portfolio';




const App = () => {
  return (
    <Routes>
      <Route
        index
        path='/'
        element={<AboutMe />}
      />
      <Route
        path='/contact'
        element={<Form />}
      />
      <Route
        path='/resume'
        element={<ResumeDownload />}
      />
      <Route
        path='/portfolio'
        element={<Portfolio />}
        />
    </Routes>

  )
};


export default App;