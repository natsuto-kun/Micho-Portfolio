import { createBrowserRouter, Outlet } from 'react-router';
import HomePage from './pages/HomePage';
import BlogDetailPage from './pages/BlogDetailPage';
import WorkDetailPage from './pages/WorkDetailPage';

function Root() {
  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'blog/:id', Component: BlogDetailPage },
      { path: 'works/:id', Component: WorkDetailPage },
    ],
  },
]);
