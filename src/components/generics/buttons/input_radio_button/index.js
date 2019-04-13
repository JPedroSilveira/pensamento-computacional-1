import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import './styles.css'

class InputRadioButton extends React.Component {
    render() {
        return (
            <label className="radio-label" id={this.props.id} key={this.props.key}>
                {ReactHtmlParser(this.props.text)}
                <input type="radio" className="option-radio" name={this.props.radioName} value={this.props.radioValue}
                    checked={this.props.checked} onChange={this.props.onChange} />
                <span className="checkmark"></span>
            </label>
        )
    }
}

export default InputRadioButton