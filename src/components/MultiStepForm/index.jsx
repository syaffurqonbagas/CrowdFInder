import { useState } from "react";
import City from "./City";
import ChoseInterest from "./ChooseInterest";
import SignUp from "./SignUp"

export default function MultiStep() {
  const [page, setPage] = useState(1);

  function goNextPage() {
    if (page === 3) return;
    setPage((page) => page + 1);
  }

  return (
    <div>
      {page === 1 && <SignUp onClick={goNextPage} />}
      {page === 2 && <City onClick={goNextPage} />}
      {page === 3 && <ChoseInterest onClick={goNextPage} />}
    </div>
  );
}
