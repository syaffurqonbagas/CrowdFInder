import { useState } from "react";
import City from "./City";
import ChoseInterest from "./ChooseInterest";

export default function MultiStep() {
  const [page, setPage] = useState(1);

  function goNextPage() {
    if (page === 3) return;
    setPage((page) => page + 1);
  }

  function goPrevPage() {
    if (page === 1) return;
    setPage((page) => page - 1);
  }

  return (
    <div>
      {page === 1 && <City onClick={goNextPage} />}
      {page === 2 && <ChoseInterest onClick={goPrevPage} />}
    </div>
  );
}
