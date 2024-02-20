import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import './App.scss';
import About from './components/about';
import Contact from './components/contact';

const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App