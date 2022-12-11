import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { WebRoutes } from './routes/index';
function App() {
  return (
    <Routes>
      {WebRoutes.map((route, index) => {
        const Layout = route.Layout;
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              typeof Layout === 'undefined' ? (
                <Page />
              ) : (
                <Layout>
                  <Page />
                </Layout>
              )
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
