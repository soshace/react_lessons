import React from "react";
import CommentList from "./CommentList";
import toggleOpen from "../mixins/toggleOpen";

import createReactClass from "create-react-class";

const ArticleOld = createReactClass({
  mixins: [toggleOpen],
  render() {
    const {
      article: { title, text, comments }
    } = this.props;
    const { isOpen } = this.state;
    const body = isOpen ? (
      <section>
        {text} <CommentList comments={comments} />
      </section>
    ) : null;

    return (
      <div>
        <h1 onClick={this.toggleOpen}>{title}</h1>
        {body}
      </div>
    );
  }
});

export default ArticleOld;
