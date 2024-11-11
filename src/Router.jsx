import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import HomePage from '@/pages/HomePage.jsx';

import App from './App';
import ListingDetailsPage from '@/pages/ListingDetailsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/listings/:listingId',
        element: <ListingDetailsPage />,
      }
    ],
  },
])

const Router = () => <RouterProvider router={router}/>

export default Router;