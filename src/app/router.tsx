import { createBrowserRouter } from 'react-router-dom'
import { SiteLayout } from '../components/layout/SiteLayout'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { PrivacyPage } from '../pages/PrivacyPage'
import { TermsPage } from '../pages/TermsPage'

function localizedPages() {
  return [
    { index: true, element: <HomePage /> },
    { path: 'privacy', element: <PrivacyPage /> },
    { path: 'terms', element: <TermsPage /> },
  ]
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      ...localizedPages(),
      { path: 'en', children: localizedPages() },
      { path: 'ja', children: localizedPages() },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
