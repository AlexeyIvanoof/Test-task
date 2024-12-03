/*import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import UserList from "./components/UserList/UserList";
import SortingOptions from "./components/SortingOptions/SortingOptions";
import Pagination from "./components/Pagination/Pagination";
import useFetchUsers from "./hooks/useFetchUsers";
import UserDetails from "./components/UserDetails/UserDetails";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);

  const { users, loading, error } = useFetchUsers(
    searchTerm,
    sortOrder,
    currentPage
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Сбрасываем страницу при новом поиске
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      {loading ? (
        <p className="p">Загрузка...</p>
      ) : error ? (
        <p className="p">Error: {error.message}</p>
      ) : selectedUser ? (
        <UserDetails user={selectedUser} />
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          <SortingOptions onSort={handleSort} />
          <UserList users={users} onUserClick={handleUserClick} />
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default App;*/


import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import UserList from "./components/UserList/UserList";
import SortingOptions from "./components/SortingOptions/SortingOptions";
import Pagination from "./components/Pagination/Pagination";
import useFetchUsers from "./hooks/useFetchUsers";
import UserDetails from "./components/UserDetails/UserDetails";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const { users, loading, error } = useFetchUsers(
    searchTerm,
    sortOrder,
    currentPage
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Сбрасываем страницу при новом поиске
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    const audio = new Audio("./melody/inna_-_amazing_new_single_supeeer_vesh_2009.mp3"); 
    audio.loop = true; // Устанавливаем воспроизведение на повтор

    if (audioPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [audioPlaying]);

  return (
    <div>
      <button className="button-audio" onClick={() => setAudioPlaying(!audioPlaying)}>
        {audioPlaying ? "Остановить музыку" : "Включить музыку"}
      </button>
      {loading ? (
        <p className="p">Загрузка...</p>
      ) : error ? (
        <p className="p">Error: {error.message}</p>
      ) : selectedUser ? (
        <UserDetails user={selectedUser} />
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          <SortingOptions onSort={handleSort} />
          <UserList users={users} onUserClick={handleUserClick} />
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default App;