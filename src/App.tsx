import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import { UserContext } from './stores/UserContext';
import userStore from './stores/UserStore';
import UserVirtualizedList from './components/UserVirtualizedList';
import { Toaster } from 'sonner';
import SearchBar from './components/SearchBar';

const routes = [
  { path: "/", element: <UserVirtualizedList /> },
  { path: "/favorites", element: <UserVirtualizedList showFavorites /> },
];

const App: React.FC = () => {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      storageKey="ui-theme"
      enableSystem={false}
      disableTransitionOnChange
    >
      <UserContext.Provider value={userStore}>
        <Router>
          <div className="app-container">
            <div className="content">
              <div className="flex flex-col h-screen bg-background text-foreground">
                <Navbar />
                <SearchBar />
                <div className="flex-1 overflow-hidden">
                  <Routes>
                    {routes.map((route, index) => (
                      <Route key={index} path={route.path} element={route.element} />
                    ))}
                  </Routes>
                </div>
              </div>
              <Toaster 
                toastOptions={{
                  style: {
                    background: 'hsl(var(--primary))',
                    color: 'hsl(var(--primary-foreground))',
                  },
                }}
              />
            </div>
          </div>
        </Router>
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
