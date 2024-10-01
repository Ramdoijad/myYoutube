import React from 'react';
import Body from './components/Body';
import Head from './components/Head';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';
import MainContainer from './components/MainContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        // Update the dynamic route to use :videoId as path parameter
        path: "/watch",
        element: <WatchPage />
      }
    ]
  }
]);

const App = () => {
  return (
    <Provider store={appStore}>
      <Head />
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
