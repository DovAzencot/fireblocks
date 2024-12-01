// FavoriteButton allows users to toggle a user as a favorite.

import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { User } from '../types/User';
import { UserContext } from '../stores/UserContext';
import { Star } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from "./ui/button";

interface FavoriteButtonProps {
  user: User;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = observer(({ user }) => {
  const userStore = useContext(UserContext);

  if (!userStore) {
    return null;
  }

  const { toggleFavorite, isFavorite } = userStore;

  const handleClick = () => {
    const wasInFavorites = isFavorite(user);
    toggleFavorite(user);
    const message = wasInFavorites 
      ? `${user.name.first} removed from favorites!` 
      : `${user.name.first} added to favorites!`;
    toast(message, { 
      position: "bottom-right",
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      id={`favorite-button-${user.email}`}
      onClick={handleClick}
      className="transition-none" // Remove all transitions from button
      aria-label={isFavorite(user) ? `Remove ${user.name.first} from favorites` : `Add ${user.name.first} to favorites`}
      title={isFavorite(user) ? `Remove ${user.name.first} from favorites` : `Add ${user.name.first} to favorites`}
    >
      {isFavorite(user) ? (
        <Star 
          size={24} 
          className="text-yellow-500 dark:text-yellow-400 transition-none" 
          fill="currentColor" 
        /> 
      ) : (
        <Star size={24} className="transition-none text-current" />
      )}
    </Button>
  );
});

export default FavoriteButton;