import React from "react";
import Tags from "./Tags";
import "./styles/TagsList.css";

function TagsList({ tags = [] }) {
    if (tags.length < 1) {
      return (
        <div className="TagsList">
          <h6>Não encontrado!</h6>
        </div>
      );
    }
  return (
    <div className="TagsList">
      {tags.map((Props, i) => {
        return <Tags  {...Props} />;
      })}
    </div>
  );
}
export default TagsList;
