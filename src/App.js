import React, { useState, useEffect } from "react";
import Characters from "./api/Characters";
import NextPage from "./api/ChangePage";
import Context from "./Context";
import Loader from "./Loader";
import CharacterModal from "./Modal/CharacterModal";
import { Link } from "react-router-dom";
import SearchBar from "./api/Components/SearchBar";

function App() {
  const [filterText, setFilterText] = useState("");
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPagesChar, setTotalPagesChar] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState(null); // Состояние для выбранного персонажа

  useEffect(() => {
    const fetchDataChar = async () => {
      let apiUrl = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;
      if (filterText) {
        apiUrl += `&name=${filterText}`;
      }

      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        if (result.error) {
          // setCharacters([]);
          alert("Character not found");
        } else {
          setCharacters(result.results);
          setTotalPagesChar(result.info.pages);
        }
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };
    fetchDataChar();
  }, [currentPage, filterText]);

  const handleNextPage = () => {
    if (currentPage < totalPagesChar) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character); // Открыть модалку с данными о персонаже
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null); // Закрыть модалку
  };

  return (
    <Context.Provider
      value={{ currentPage, totalPagesChar, handleCharacterClick }}
    >
      <div className="parentAll">
        {loading && <Loader />}
        {characters.length ? (
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

            <Characters chars={characters} filterText={filterText} />
            <NextPage nextPage={handleNextPage} prevPage={handlePrevPage} />

            {/* Модалка */}
            {selectedCharacter && (
              <CharacterModal
                character={selectedCharacter}
                onClose={handleCloseModal}
              />
            )}
          </>
        ) : (
          loading
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
