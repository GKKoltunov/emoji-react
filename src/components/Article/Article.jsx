/* eslint-disable react/prop-types */




export const Article = ({ symbol, title, newWords }) => {
  return (
    <article className="emoji">
      <h3 className="emoji__img">{symbol}</h3>
      <h4 className="emoji__name">{title}</h4>
      <p className="emoji__keywords">{newWords}</p>
    </article>
  );
};
