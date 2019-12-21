import React, { Component } from 'react';
import Article from './Article';
import oneOpen from '../decorators/oneOpen';
import Select from 'react-select';

class ArticleList extends Component {
  state = {
    selectedArticles: null
  };

  handleSelectChange = selectedArticles => {
    console.log(selectedArticles);
    this.setState({ selectedArticles });
  };

  renderListItem = () => {
    const { articles, isItemOpen, toggleOpenItem } = this.props;
    return articles.map(article => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={isItemOpen(article.id)}
          openArticle={toggleOpenItem(article.id)}
        />
      </li>
    ));
  };

  render() {
    const { articles } = this.props;
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }));
    return (
      <div>
        <h1>Article list</h1>
        <Select
          options={options}
          isMulti={true}
          value={this.state.selectedArticles}
          onChange={this.handleSelectChange}
        />
        <ul>{this.renderListItem()}</ul>
      </div>
    );
  }
}

export default oneOpen(ArticleList);
