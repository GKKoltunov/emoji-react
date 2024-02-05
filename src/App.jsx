/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Article } from "./components/Article/Article";
import { useEffect, useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = `http://api.codeoverdose.space/api/emoji?search=${inputValue}&page=${page}&limit=${limit}`;

  useEffect(() => {
    search;
   
  }, [inputValue, limit, page]);

 

  function search(ev) {
    setInputValue(ev.target.value);
  }

  useEffect(() => {
    async function getData() {
      try {
        const respons = await fetch(url);
        const obj = await respons.json();
        setData(obj.data);
        setLastPage(obj.lastPage);
      } catch (e) {
        alert(e);
      } finally {
        setLoading(false);
      }
    
    }

    getData();
    
  }, [url]);


  function randomIcon() {
    if (data.length) {
      let randomIndex = Math.floor(Math.random() * data.length);
      let randomImg = data[randomIndex].symbol;
      let title = document.querySelector("title");
      title.innerHTML = `${randomImg}Find Emoji`;
    } else {
      let title = document.querySelector("title");
      title.innerHTML = `😀Emoji React`;
    }
  }
  randomIcon();

  data.forEach((el) => {
    let arr = el.keywords.split(" ");
    el.newWords = arr
      .filter((el, index) => {
        return arr.indexOf(el) === index;
      })
      .join(" ");
  });

  let cards = loading ? (
    <p className="loading">loading</p>
  ) : (
    data
      .filter(
        (el) =>
          el.keywords.toLowerCase().includes(inputValue.toLowerCase()) ||
          el.title.toLowerCase().includes(inputValue.toLowerCase())
      )
        .map((el) => <Article {...el} key={el.title} />)
      
  );

  return (
    <>
      <Header search={search} inputValue={inputValue} />
      <Main
        cards={cards}
        limit={limit}
        setLimit={setLimit}
        page={page}
        setPage={setPage}
        lastPage={lastPage}
        inputValue={inputValue}
        setLastPage={setLastPage}
        data={data}
      />
      <Footer />
    </>
  );
}

export default App;
