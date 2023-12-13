import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ className, linkClassName, listName, link }) => {
  return (
    <li className={className}>
      <Link to={link} className={linkClassName}>
        {listName}
      </Link>
    </li>
  );
};

export default ListItem;
