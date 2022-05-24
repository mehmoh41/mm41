import { useLocation } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { darkTheme, lightTheme } from './components/themes';
import './App.css';

// components
import Main from './components/Main';
import AboutPage from './components/aboutPage';
import BlogPage from './components/blogPage';
import WorkPage from './components/workPage';
import SkillPage from './components/skillPage';
import { AnimatePresence } from 'framer-motion';
import SoundBar from './sub-components/SoundBar';


function App() {
  const location = useLocation();
  return <>
    <ThemeProvider theme={lightTheme}>
      <SoundBar/>
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/blog' element={<BlogPage />} />
        <Route exact path='/work' element={<WorkPage />} />
        <Route exact path='/skill' element={<SkillPage />} />
        </Routes>    
        </AnimatePresence>
    </ThemeProvider>
    </>
  
}

export default App;
