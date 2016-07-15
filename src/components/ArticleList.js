import React, { Component }  from 'react'
import Article from './Article/index'
import oneOpen from '../decorators/oneOpen'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from "react-day-picker"
import 'react-day-picker/lib/style.css'

class ArticleList extends Component {

    state = {
        selectedArticles: null,
        from: null,
        to: null
    }

    render() {
        const { articles, isItemOpen, toggleOpenItem } = this.props

        const listItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {isItemOpen(article.id)}
                openArticle = {toggleOpenItem(article.id)}
            />
        </li>)

        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <h1>Article list</h1>
                {this.getRangeTitle()}
                <Select
                    options = {options}
                    multi = {true}
                    value = {this.state.selectedArticles}
                    onChange = {this.handleSelectChange}
                />
                <DayPicker
                    ref="daypicker"
                    selectedDays={day => DateUtils.isDayInRange(day, this.state)}
                    onDayClick={this.handleDayClick}
                />
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }

    getRangeTitle() {
        const { from, to } = this.state
        const fromText = from && `Start date: ${from.toDateString()}`
        const toText = to && `Finish date: ${to.toDateString()}`

        return <p>{fromText} {toText}</p>
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range)
    }

    handleSelectChange = (selectedArticles) => {
        console.log(selectedArticles)
        this.setState({
            selectedArticles
        })
    }
}

export default oneOpen(ArticleList)