import { Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

import Loading from './Loading';
import {
  Page404,
  UserPage,
  BlogPage,
  IndexPage,
  LoginPage,
  ProductsPage,
  RegisterPage,
} from './pageListAsync';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: '/app', element: <IndexPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <RegisterPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
