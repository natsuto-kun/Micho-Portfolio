import { createBrowserRouter, Outlet } from 'react-router';
import HomePage from './pages/HomePage';
import BlogDetailPage from './pages/BlogDetailPage';
import WorkDetailPage from './pages/WorkDetailPage';
import ProfilePage from './pages/ProfilePage';
import WorksPage from './pages/WorksPage';
import BlogPage from './pages/BlogPage';
import PortfolioPage from './pages/PortfolioPage';

function Root() {
  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'profile', Component: ProfilePage },
      { path: 'works', Component: WorksPage },
      { path: 'works/:id', Component: WorkDetailPage },
      { path: 'blog', Component: BlogPage },
      { path: 'blog/:id', Component: BlogDetailPage },
      { path: 'portfolio', Component: PortfolioPage },
    ],
  },
]);
