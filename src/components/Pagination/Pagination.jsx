import "./Pagination.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Pagination({ brojStranica, setPage, page }) {
  const niz = [];
  for (let i = 1; i <= brojStranica; i++) {
    niz.push(i);
  }

  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={page === 1}
      >
        <MdKeyboardArrowLeft className="pagination-strelica" />
      </button>
      {niz.map((value, index) => {
        const isActive = page === value;
        return (
          <button
            onClick={() => {
              setPage(value);
            }}
            key={index}
            style={{ fontSize: "1.25em" }}
            className={`pagination-btn ${isActive ? "active" : ""}`}
          >
            {value}
          </button>
        );
      })}
      <button
        className="pagination-btn"
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={page === brojStranica}
      >
        <MdKeyboardArrowRight className="pagination-strelica" />
      </button>
    </div>
  );
}
