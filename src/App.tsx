import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import NotfoundPage from './containers/NotFoundPage';
import configureStore from './stores/configureStore';

const store = configureStore();

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
