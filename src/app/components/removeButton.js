import React from "react";
import styles from "../../../styles/products.module.css";
import { MdDelete } from "react-icons/md";

import Delete from "./delete";

const RemoveButton = ({ id }) => {
  const removeProduct = (e) => {
    e.preventDefault();
    Delete(id);
  };

  return (
    <>
      <button
        onClick={removeProduct}
        className={styles.button_del}
        title="Delete this Product"
      >
        <MdDelete className={styles.icon1} />
        Delete
      </button>
    </>
  );
};

export default RemoveButton;
