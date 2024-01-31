/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./Main.css";


export const Main = ({ cards, load }) => {
  return (
    <section className="content">
      <div className="container">
        
        {cards}
      </div>
    </section>
  );
};
