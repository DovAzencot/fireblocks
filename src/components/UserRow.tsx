// UserRow displays individual user information along with a favorite button.

import React from 'react';
import { User } from '../types/User';
import FavoriteButton from './FavoriteButton';
import { Badge } from "./ui/badge"

interface UserRowProps {
  user: User;
}

const UserRow: React.FC<UserRowProps> = ({ user }) => {
  return (
    <div className="flex items-center p-4 border-b border-border h-20 min-w-[320px] hover:bg-muted/50">
      <div className="flex-none w-12">
        <img
          src={user.picture.medium}
          alt={`${user.name.first} ${user.name.last}`}
          className="w-12 h-12 rounded-full bg-muted"
        />
      </div>
      <div className="flex-1 min-w-0 mx-4">
        <div className="font-medium truncate flex items-center gap-2 text-foreground">
          <Badge 
            variant={user.gender === 'male' ? 'default' : 'secondary'}
            className="transition-none"
            style={{ backgroundColor: user.gender === 'male' ? '#3b82f6' : '#ec4899', color: 'white' }}
          >
            {user.gender}
          </Badge>
          {`${user.name.first} ${user.name.last}`}
        </div>
        <div className="text-muted-foreground truncate">
          <a href={`mailto:${user.email}`} className="hover:underline">
            {user.email}
          </a>
        </div>
      </div>
      <div className="flex-none w-12">
        <FavoriteButton user={user} />
      </div>
    </div>
  );
};

export default UserRow;
