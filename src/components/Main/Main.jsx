/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { PagesBtn } from "../PagesBtn/PagesBtn";
import "./Main.css";


export const Main = ({
  cards,
  limit,
  setLimit,
  page,
  setPage,
  lastPage,
  inputValue,
  
}) => {
  useEffect(() => {
    setPage(0);
  }, [inputValue,limit]);



  let btns = [0, 1, 2, 3, 4];

  if (page < 3) {
    btns;
  } else if ((page >= 3) & (page < lastPage - 1)) {
    btns = [page - 2, page - 1, page, page + 1, page + 2];
  } else if (page === lastPage) {
    btns = [lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1, lastPage];
  } else if (page === lastPage - 1) {
    btns = [page - 3, page - 2, page - 1, page, lastPage];
  } else if (lastPage === 0) {
    btns = [page + 1]
  }
  

  return (
    <section className="content">
      <div className="container">{cards}</div>
      <span className="line"></span>
      <div className="set">
        <div className="btns">
          <PagesBtn
            disabled={page === 0 ? "disabled" : null}
            className={"btnPage"}
            click={() => setPage(0)}
            value={"First"}
          ></PagesBtn>
          {btns.map((el) =>
            (lastPage >= 0) & (el <= lastPage) ? (
              <PagesBtn
                className={page === el ? "btnPage-focus" : "btnPage"}
                key={el}
                click={() => setPage(el)}
                value={el + 1}
              ></PagesBtn>
            ) : null
          )}
          <PagesBtn
            disabled={page === lastPage ? "disabled" : null}
            className={"btnPage"}
            click={() => setPage(lastPage)}
            value={"Last"}
          ></PagesBtn>
        </div>
        <div className="limit">
          <p className="perPage">Per page</p>
          <select
            value={limit}
            onChange={(e) => { setLimit(e.target.value)}}
            className="list"
            name=""
            id=""
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="48">48</option>
          </select>
        </div>
      </div>
    </section>
  );
};
