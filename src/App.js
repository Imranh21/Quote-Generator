import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.scss";

const URL =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

export default function App() {
  const [quotes, setQuotes] = useState("");
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    gettingData();
  }, []);

  const gettingData = () => {
    axios(URL).then((res) => {
      const allQuotes = res.data.quotes;
      const randomNumber = Math.ceil(Math.random() * allQuotes.length);
      const randomQuote = allQuotes[randomNumber];
      const { quote, author } = randomQuote;
      setQuotes(quote);
      setAuthorName(author);
    });
  };

  const changeQuote = () => {
    gettingData();
  };

  return (
    <div className="App">
      <div className="quoteContainer">
        <div className="quoteBox">
          <h3 className="qoute">{quotes}</h3>
          <p className="author">{authorName}</p>
          <button onClick={() => changeQuote()}>New Quote</button>
        </div>
      </div>
    </div>
  );
}
