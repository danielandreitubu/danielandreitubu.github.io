import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const SearchInput = ({ searchTerm, onSearchTermChange }) => (
  <InputBase
  sx={{ color: 'white' }}
  placeholder="Search GitHub users..."
  inputProps={{ 'aria-label': 'search', autoComplete: 'off' }}
  value={searchTerm}
  onChange={(e) => onSearchTermChange(e.target.value)}
  fullWidth
  />
);

const SearchResult = ({ users }) => (
  <Grid container spacing={2}>
    {users.map((user) => (
      <Grid item xs={12} key={user.id}>
        <Card sx={{ padding: '16px', display: 'flex', backgroundColor: 'black' }}>
          <Avatar
            alt={user.login}
            src={user.avatar_url}
            sx={{ width: 120, height: 120, marginRight: '16px' }}
          />
          <CardContent>
          <Typography variant="h6" component="div" sx={{ color: 'white' }}>
            {user.login}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
            Profile URL:{' '}
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.html_url}
            </a>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
            Score:{' '}
            {user.score} 
           
          </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

const SearchNavigation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cancelToken, setCancelToken] = useState(null);

  useEffect(() => {
    // Cancel the previous request if it exists
    if (cancelToken) {
      cancelToken.cancel('Operation canceled by the user.');
    }

    // Create a new cancel token for this request
    const newCancelToken = axios.CancelToken.source();
    setCancelToken(newCancelToken);

    // Define a debounced function to fetch users based on the search term
    const debounceFetchUsers = setTimeout(async () => {
      setLoading(true);

      try {
        if (searchTerm) { // Only make the request if searchTerm is not empty
          const response = await axios.get(
            `https://api.github.com/search/users?q=${searchTerm}`,
            {
              cancelToken: newCancelToken.token,
            }
          );
          setUsers(response.data.items);
        } else {
          // Clear the users state if searchTerm is empty
          setUsers([]);
        }
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error('Error fetching users:', error);
        }
      } finally {
        setLoading(false);
      }
    }, 300); // Adjust the debounce delay as needed

    // Cleanup the timeout on unmount or when searchTerm changes
    return () => {
      clearTimeout(debounceFetchUsers);
    };
  }, [searchTerm]);

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: 'black', height: '70px', width: '100%' }}>
        <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ color: 'white' }}>
            <SearchIcon />
          </IconButton>
          <SearchInput searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
        </Toolbar>
      </AppBar>
      {loading ? 
      <Typography variant="body2" sx={{ fontSize: '18px' }}>
      Loading...
    </Typography> : <SearchResult users={users} />}
    </div>
  );
};

export default SearchNavigation;
