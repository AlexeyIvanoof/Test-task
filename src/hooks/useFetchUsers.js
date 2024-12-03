import { useState, useEffect } from 'react';

const useFetchUsers = (searchTerm, sortOrder, currentPage) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!searchTerm) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=${searchTerm}&sort=repositories&order=${sortOrder}&page=${currentPage}`
        );
        const data = await response.json();

        if (response.ok) {
          setUsers(data.items);
        } else {
          setError(new Error(data.message));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [searchTerm, sortOrder, currentPage]);

  return { users, loading, error };
};

export default useFetchUsers;