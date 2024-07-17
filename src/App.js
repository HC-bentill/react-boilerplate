import {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [userInput, setUserInput] = useState("");
  const [countryList, setCountryList] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (userInput !== "") {
      setTimeout(() => {
        axios
          .get(`https://restcountries.com/v3.1/name/${userInput}`)
          .then((response) => {
            setCountryList(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, 3000);
    }
  }, [userInput]);

  console.log({countryList})

  return (
    <div className="grid place-items-center h-[100vh]">
      <div className="bg-gray-300 ">
        <div className="border border-black">
          <input value={userInput} onChange={(e) => setUserInput(e.target.value)} type="text" className="w-full outline-none border-0 border-b border-gray-300" placeholder="placeholder" />
          {isLoading ? "Please Wait ..." : <div>Start typing an eircode or address</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
