import { useState } from "react";
import City from "./City";
import ChoseInterest from "./ChooseInterest";
import SignUp from "./SignUp"
import { useDispatch } from "react-redux";
import {Register} from "../../redux/action/user"

const pages = [
  { id: "signup" },
  { id: "city" },
  { id: "choseInterest" },
]

export default function MultiStep() {
  const [page, setPage] = useState(1);
  const [state, setState] = useState({
  email: "",
  password: "",
  username: "",
  fullname: "",
  location: "",
  role: "",
  interest: "",
  })
  const dispatch = useDispatch()
  const props = {state, setState, setPage}
  const { id } = page;

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(Register(state.value));
  };


  function goNextPage() {
    if (page === 3) return;
    setPage((page) => page + 1);
  }

  return (
    <div>
      {page === 1 && <SignUp {...props} onClick={goNextPage} />}
      {page === 2 && <City {...props} onClick={goNextPage} />}
      {page === 3 && <ChoseInterest {...props} onClick={goNextPage} />}
    </div>
  );
}
