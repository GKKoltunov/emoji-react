/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */




export const PagesBtn = ({ value, click, className, disabled }) => {
  return (
    <button disabled={disabled} className={className} onClick={click}>
      {value}
    </button>
  );
};
 