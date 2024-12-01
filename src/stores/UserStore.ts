// UserStore manages the state of users and favorites, including fetching users from an API.

import { makeAutoObservable, runInAction } from 'mobx';
import { User } from '../types/User';
import { API_URL } from '../constants';
import { toast } from 'sonner';

class UserStore {
  users: User[] = [];
  favorites: User[] = [];
  loading: boolean = false;
  searchQuery: string = '';

  constructor() {
    makeAutoObservable(this);
    this.getUsers();
  }

  setSearchQuery = (query: string) => {
    this.searchQuery = query.toLowerCase();
  };

  get filteredUsers() {
    if (!this.users) return [];
    return this.users.filter(user => 
      user.name.first.toLowerCase().includes(this.searchQuery) ||
      user.name.last.toLowerCase().includes(this.searchQuery)
    );
  }

  get filteredFavorites() {
    return this.favorites.filter(user => 
      user.name.first.toLowerCase().includes(this.searchQuery) ||
      user.name.last.toLowerCase().includes(this.searchQuery)
    );
  }

  getUsers = async () => {
    this.loading = true;
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      runInAction(() => {
        this.users = data.results || [];
        this.loading = false;
        toast.success('New users loaded successfully');
      });
    } catch (error) {
      runInAction(() => {
        this.users = [];
        this.loading = false;
        const errorMessage = error instanceof Response && error.status === 429 
          ? 'Too many requests. Please try again later.' 
          : 'Failed to load users';
        toast.error(errorMessage);
      });
      console.error('Error fetching users:', error);
    }
  };

  toggleFavorite = (user: User) => {
    if (this.isFavorite(user)) {
      this.favorites = this.favorites.filter(fav => fav.email !== user.email);
    } else {
      this.favorites = [...this.favorites, user];
    }
  };

  isFavorite = (user: User) => {
    return this.favorites.some(fav => fav.email === user.email);
  };
}

const userStore = new UserStore();
export default userStore;
