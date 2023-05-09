import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, ErrorPage, LostPage, HttpCodePage } from './Pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/lost' element={<LostPage />} />
        <Route path='/http-code/:statusCode' element={<HttpCodePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
