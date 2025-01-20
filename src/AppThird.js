import React, { useState, useEffect } from "react";
import Context from "./Context";
import Loader from "./Loader";
import Episodes from "./api/Components/Episode";
import NextPage from "./api/ChangePage";
import { Link } from "react-router-dom";
import SearchBar from "./api/Components/SearchBar";

function AppThird() {
  const [loading, setLoading] = useState(true);
  const [episode, setEpisode] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPagesChar, setTotalPagesChar] = useState(0);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const fetchDataEpisode = async () => {
      let apiUrl = `https://rickandmortyapi.com/api/episode/?page=${currentPage}`;
      if (filterText) {
        apiUrl += `&name=${filterText}`;
      }

      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        if (result.error) {
          alert("Character not found");
        } else {
          setEpisode(result.results);
          setTotalPagesChar(result.info.pages);
        }
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };
    fetchDataEpisode();
  }, [currentPage, filterText]);

  const handleNextPage = () => {
    if (currentPage < totalPagesChar) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Context.Provider value={{ currentPage, totalPagesChar }}>
      <div className="parentAll">
        {loading && <Loader />}
        {episode.length ? (
          <>
            <div className="navPages">
              <h3 className="totalChars">
                <Link to="/">Total characters: 826</Link>
              </h3>
              <h3 className="totalChars">
                <Link to="/locations">Total location: 126</Link>
              </h3>
              <h3 className="totalChars">
                <Link to="/episodes">Total episode: 51</Link>
              </h3>
            </div>

            <SearchBar
              filterText={filterText}
              onFilterTextChange={(text) => {
                setFilterText(text);
                setCurrentPage(1);
              }}
            />

            <Episodes episode={episode} />
            <NextPage nextPage={handleNextPage} prevPage={handlePrevPage} />
          </>
        ) : (
          loading
        )}
      </div>
    </Context.Provider>
  );
}

export default AppThird;
