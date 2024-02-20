import { Routes, Route } from 'react-router-dom';
import Layout from './assets/components/layout';
import Home from './assets/components/home';
import './App.scss';

const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App