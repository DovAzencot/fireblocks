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

const calculateContainerHeight = () => window.innerHeight - NAVBAR_HEIGHT - SEARCHBAR_HEIGHT;

// Main component definition
const UserVirtualizedList: React.FC<UserVirtualizedListProps> = observer(({ showFavorites = false }) => {
  const userStore = useContext(UserContext); // Access the user store from context
  const [containerHeight, setContainerHeight] = useState(calculateContainerHeight);

  // Effect to handle window resize and update container height
  useEffect(() => {
    const handleResize = () => setContainerHeight(calculateContainerHeight);

    window.addEventListener('resize', handleResize); // Add resize event listener
    return () => window.removeEventListener('resize', handleResize); // Cleanup event listener on unmount
  }, []);

  // Display error message if user store is not available
  if (!userStore) return <ErrorMessage message="User store is not available." />;

  // Display loading skeleton rows if data is still loading
  if (userStore.loading) {
    const rowsToShow = Math.ceil(containerHeight / 80); // Calculate number of skeleton rows to show
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

  // Determine which list of items to display (favorites or all users)
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

  // Display error message if no items are found
  if (items.length === 0) return <ErrorMessage message={emptyMessage} />;

  // Render the virtualized list using FixedSizeList
  return (
    <div style={{ height: containerHeight, width: '100%' }}>
      <FixedSizeList
        height={containerHeight}
        width="100%"
        itemCount={items.length}
        itemSize={80}
      >
        {({ index, style }) => (
          <div style={style}>
            <UserRow user={items[index]} />
          </div>
        )}
      </FixedSizeList>
    </div>
  );
});

export default UserVirtualizedList;