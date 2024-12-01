// Navbar provides navigation links to different parts of the application.

import React from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from "./ModeToggle";
import { NAVBAR_HEIGHT } from '../constants';
import { Star, GithubIcon } from 'lucide-react';
import Logo from './Logo';
import { ThemeProvider } from 'next-themes';

const Navbar: React.FC = () => {

  return (
    <ThemeProvider attribute="class">
      <nav className="border-b border-border bg-background shadow-lg" style={{ height: `${NAVBAR_HEIGHT}px` }}>
        <div className="container mx-auto p-4 flex items-center justify-between" style={{ height: '100%' }}>
          <div className="flex items-center space-x-6">
            <Link to="/" aria-label="Home">
              <Logo className='h-5'/>
            </Link>
            <Link to="/favorites" aria-label="Favorites" className="font-medium text-lg hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white flex items-center gap-2">
              <Star 
                size={20} 
                className="text-yellow-500 dark:text-yellow-400" 
                fill="currentColor"
              />
              <span className="hidden sm:inline">Favorites</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/DovAzencot/fireblocks" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub repository"
              className="font-medium text-lg hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white flex items-center gap-2"
            >
              <GithubIcon size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </ThemeProvider>
  );
};

export default Navbar;
