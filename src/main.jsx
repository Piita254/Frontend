import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './input.css';
import './output.css';
import App from './App.jsx';
import { UserProvider } from './components/auth/UserContext.jsx'; // Import UserProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider> {/* Wrap App with UserProvider */}
      <App />
    </UserProvider>
  </StrictMode>
);
