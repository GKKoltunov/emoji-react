
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { data } from './Data/emoji'
import {Article} from './components/Article/Article'
import { useState } from 'react'

function App() {
  let randomIcon = () => {
    let randomIndex = Math.floor(Math.random() * data.length);
    let randomImg = data[randomIndex].symbol;
    let title = document.querySelector("title");
    title.innerHTML = `${randomImg}Find Emoji`;
  };
  randomIcon();

  data.forEach((el) => {
    let arr = el.keywords.split(" ");
    el.newWords = arr
      .filter((el, index) => {
        return arr.indexOf(el) === index;
      })
      .join(" ");
  });



  const [inputValue, setInputValue] = useState('')
  function search(ev){ setInputValue(ev.target.value)
  }
  
  let cards = data.filter(el => el.keywords.toLowerCase().includes(inputValue.toLowerCase()) ||
    el.title.toLowerCase().includes(inputValue.toLowerCase())
    
  ).map((el) => <Article {...el} key={el.title} />);
  

  return (
    <>
      <Header search={search} inputValue={inputValue} />
      <Main cards={cards} />
      <Footer />
    </>
  );
}

export default App
