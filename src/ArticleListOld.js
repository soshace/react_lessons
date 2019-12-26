import React from 'react';
import Article from './Article';
import oneOpen from './mixins/oneOpen';
import createReactClass from "create-react-class";

const ArticleList = createReactClass({
  mixins: [oneOpen],
  render() {
    const { articles } = this.props
    const listItems = articles.map((article) => <li key={article.id}>
      <Article article={article}
        isOpen={this.isItemOpen(article.id)}
        openArticle={this.toggleOpenItem(article.id)}
      />
    </li>)
    return (
      <div>
        <h1>Article list</h1>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

export default ArticleList;