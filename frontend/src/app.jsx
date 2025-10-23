import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import { USE_BROWSER_ROUTER } from './common/constants';
import GlobalHeader from './components/global-header';
import HomePage from './pages/Home';
import NotFound from './pages/not-found';
import './styles/app.scss';

const App = () => {
  const Router = USE_BROWSER_ROUTER ? BrowserRouter : HashRouter;

  return (
    <div style={{ height: '100%' }}>
      <Router>
        <GlobalHeader />
        <div style={{ height: '56px', backgroundColor: '#000716' }}>&nbsp;</div>
        <div>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
