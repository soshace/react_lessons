import React, { Component } from 'react';
import Article from './Article';
import oneOpen from '../decorators/oneOpen';
import Select from 'react-select';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './article_style.css';

class ArticleList extends Component {
  state = {
    selectedArticles: null,
    from: undefined,
    to: undefined
  };

  handleSelectChange = selectedArticles => {
    this.setState({ selectedArticles });
  };

  getRangeTitle() {
    const { from, to } = this.state;
    return (
      <p>
        {!from && !to && "Please select the first day."}
        {from && !to && "Please select the last day."}
        {from &&
          to &&
          `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{" "}
        {from && to && (
          <button className="link" onClick={this.handleResetClick}>
            Reset
          </button>
        )}
      </p>
    );
  }

  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    const { from, to } = range;
    this.setState({ from, to });
  };

  handleResetClick = () => {
    this.setState({ from: undefined, to: undefined });
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
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    const { articles } = this.props;
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }));
    return (
      <div>
        <h1>Article list</h1>
        {this.getRangeTitle()}
        <Select
          options={options}
          isMulti={true}
          value={this.state.selectedArticles}
          onChange={this.handleSelectChange}
        />
        <DayPicker
          className="Selectable"
          selectedDays={{ from, to }}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
        <ul>{this.renderListItem()}</ul>
      </div>
    );
  }
}

export default oneOpen(ArticleList);
