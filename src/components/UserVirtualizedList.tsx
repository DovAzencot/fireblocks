// UserVirtualizedList displays a virtualized list of users or favorites, handling dynamic resizing.

import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { FixedSizeList } from 'react-window';
import { UserContext } from '../stores/UserContext';
import UserRow from './UserRow';
import ErrorMessage from './ErrorMessage';
import { NAVBAR_HEIGHT, SEARCHBAR_HEIGHT } from '../constants';
import SkeletonRow from './SkeletonRow';
import { Link } from 'react-router-dom';

interface UserVirtualizedListProps {
  showFavorites?: boolean;
}

const UserVirtualizedList: React.FC<UserVirtualizedListProps> = observer(({ showFavorites = false }) => {
  const userStore = useContext(UserContext);
  const [containerHeight, setContainerHeight] = useState(
    window.innerHeight - NAVBAR_HEIGHT - SEARCHBAR_HEIGHT
  );

  useEffect(() => {
    const handleResize = () => {
      setContainerHeight(window.innerHeight - NAVBAR_HEIGHT - SEARCHBAR_HEIGHT);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!userStore) {
    return <ErrorMessage message="User store is not available." />;
  }

  if (userStore.loading) {
    const rowsToShow = Math.ceil(containerHeight / 80); 
    return (
      <div style={{ 
        height: containerHeight, 
        minHeight: '100vh',
        width: '100%',
      }}>
        {[...Array(rowsToShow)].map((_, i) => (
          <SkeletonRow key={i} />
        ))}
      </div>
    );
  }

  const items = showFavorites ? userStore.filteredFavorites : userStore.filteredUsers;
  const emptyMessage = showFavorites ? (
    <span>
      No favorites yet.<br />
      <Link to="/" className="text-blue-500 underline">Go to the home page to add some!</Link>
    </span>
  ) : (
    <span>
      No users found.<br />
      <a href="#" onClick={() => window.location.reload()} className="text-blue-500 underline">Try to refresh the page.</a>
    </span>
  );

  if (items.length === 0) {
    return <ErrorMessage message={emptyMessage} />;
  }

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style}>
      <UserRow user={items[index]} />
    </div>
  );

  return (
    <div style={{ height: containerHeight, width: '100%' }}>
      <FixedSizeList
        height={containerHeight}
        width="100%"
        itemCount={items.length}
        itemSize={80}
      >
        {Row}
      </FixedSizeList>
    </div>
  );
});

export default UserVirtualizedList;