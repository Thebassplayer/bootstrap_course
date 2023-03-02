import React from "react";

const Nav = ({ selected, items }) => {
  const isActive = item => item.key === selected;
  const onClick = item => () => {
    window.location.href = item.url;
  };
  return (
    <ul>
      {items.map(item => (
        <li key={item.key} className={isActive(item) ? "active" : ""}>
          <button disabled={item.disabled} onClick={onClick}>
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
