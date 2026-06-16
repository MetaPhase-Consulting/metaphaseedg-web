import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')!

// Prerendered routes ship static HTML inside #root — hydrate those.
// The dev server (and any non-prerendered route) starts from an empty root.
if (root.childNodes.length > 0) {
  hydrateRoot(root, <StrictMode><App /></StrictMode>)
} else {
  createRoot(root).render(<StrictMode><App /></StrictMode>)
}
