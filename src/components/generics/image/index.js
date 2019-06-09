import React from 'react'
import './styles.css'

class Image extends React.Component {
    constructor(props){
        super(props)
        this.style = {
            width: props.width ? props.width : "auto",
            height: props.height ? props.height : "auto",
            backgroundColor: props.backgroundColor ? props.backgroundColor : "none",
            marginBottom: props.marginBottom ? props.marginBottom : "0",
            marginTop: props.marginTop ? props.marginTop : "0"
        }
        this.class = "image-container".concat(" ").concat(this.props.className)
    }
    render() {
        return (
            <div className={this.class}>
                <img onClick={this.props.onClick} src={this.props.src} style={this.style} alt={this.props.alt} />
                {this.props.children}
            </div>
        )
    }
}

export default Image