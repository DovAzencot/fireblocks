import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { UserContext } from '../stores/UserContext';
import { Search } from 'lucide-react';
import { Input } from "./ui/input"

const SearchBar: React.FC = observer(() => {
  const userStore = useContext(UserContext);

  if (!userStore) return null;

  return (
    <div className="w-full h-[72px] px-4 py-2 border-b border-border bg-background transition-none">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground " size={20} />
        <Input
          type="text"
          placeholder="Search by name..."
          className="w-full pl-10 transition-none"
          value={userStore.searchQuery}
          onChange={(e) => userStore.setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
});

export default SearchBar;