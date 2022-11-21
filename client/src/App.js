import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout, ScrollToTop, UserLayout, ViewerLayout } from './components';
import { UserRoutes } from './routes';
function App() {
  const [author, setAuthor] = useState('viewer');
  return (
    <div className="h-screen bg-gray-50">
      <ScrollToTop />
      <Routes>
        {UserRoutes.map((route, i) => {
          const Layout = route.layout;
          const Page = route.component;
          return (
            <Route
              key={i}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
