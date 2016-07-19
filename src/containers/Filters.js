import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from "react-day-picker"
import 'react-day-picker/lib/style.css'
import { connect } from 'react-redux'
import { changeFilters } from '../AC/filters'

class Filters extends Component {
    static propTypes = {

    };

    render() {
        const { articles, filters } = this.props
        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                {this.getRangeTitle()}
                <Select
                    options = {options.toJS()}
                    multi = {true}
                    value = {filters.selectedArticles}
                    onChange = {this.handleSelectChange}
                />
                <DayPicker
                    ref="daypicker"
                    selectedDays={day => DateUtils.isDayInRange(day, filters)}
                    onDayClick={this.handleDayClick}
                />

            </div>
        )
    }
    getRangeTitle() {
        const { from, to } = this.props.filters
        const fromText = from && `Start date: ${from.toDateString()}`
        const toText = to && `Finish date: ${to.toDateString()}`

        return <p>{fromText} {toText}</p>
    }

    handleDayClick = (e, day) => {
        const { filters, changeFilters } = this.props
        const range = DateUtils.addDayToRange(day, filters);
        changeFilters(range)
    }

    handleSelectChange = (selectedArticles) => {
        this.props.changeFilters({
            selectedArticles: selectedArticles.map(o => o.value)
        })
    }
}

export default connect(state => {
    const { articles, filters } = state
    return {
        articles: articles.valueSeq(),
        filters
    }
}, { changeFilters })(Filters)