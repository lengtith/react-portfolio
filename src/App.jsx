import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './assets/components/layout';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}/>
    </Routes>
    </>
  )
}

export default App