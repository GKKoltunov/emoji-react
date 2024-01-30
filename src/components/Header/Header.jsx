/* eslint-disable react/prop-types */
import "./Header.css"



export const Header = ({search,inputValue}) => {
  return (
    <>
      <header className="header">
        <h1>Emoji Finder</h1>
        <p className="header__p">Find emoji by keywords</p>
        <input
          onChange={search}
          value={inputValue}
          className="header__input"
          type="text"
          placeholder="Placeholder"
        />
      </header>
    </>
  );
}
