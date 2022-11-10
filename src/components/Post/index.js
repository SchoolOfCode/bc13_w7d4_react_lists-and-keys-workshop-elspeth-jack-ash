import React from "react";

import "./index.css";

function Post(props) {
  return (
    <article>
      {
        (props.key,
        props.title,
        props.date,
        props.author,
        props.text,
        props.highlights,
        props.image)
      }
    </article>
  );
}

export default Post;
