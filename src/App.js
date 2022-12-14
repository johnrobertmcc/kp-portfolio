import { createElement } from 'react';
import Header from 'components/layout/Header';
import Main from 'components/layout/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from 'constants';
import './App.scss';

/**
 * Function used to render the layout of the portfolio.
 *
 * @returns {Element} The porfolio website.
 */
export default function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Routes>
          {ROUTES?.map((route, i) => {
            const { path, element, props = {} } = route;
            return (
              <Route
                path={path}
                element={createElement(element, props)}
                key={i}
              />
            );
          })}
        </Routes>
      </Main>
    </Router>
  );
}
