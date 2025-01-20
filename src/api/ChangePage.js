import React, { useContext } from "react";
import "../styles/ChangePage.css";
import Context from "../Context";

export default function NextPage({ nextPage, prevPage }) {
  const { currentPage } = useContext(Context);
  const { totalPagesChar } = useContext(Context);

  return (
    <div className="btnBlock">
      <button className="navBtn" onClick={() => prevPage()}>
        ←
      </button>
      <h2 className="totalPage">
        {currentPage} - {totalPagesChar}
      </h2>
      <button className="navBtn" onClick={() => nextPage()}>
        →
      </button>
    </div>
  );
}
