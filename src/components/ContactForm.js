import React from 'react';
import '../App.css'

class ContactForm extends React.Component{
    state = {
        title:'',
        globalTitle: document.title
    }

    componentDidMount() {
        console.log("Rendered Form")
    }

    handleSubmit = (event) => {
        this.setState({
            globalTitle: 'My form -'
        })
        
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    componentDidUpdate = () => {
        console.log("Title changed")
        document.title = this.state.globalTitle
    }

    render() {
        return(
            <div className="form-container">
                <form  onSubmit={this.handleSubmit} className="form-zone">
                    <label htmlFor="input-name">Contacts us</label>
                    <input type="text" id="input-name" onChange={this.handleChange}></input>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default ContactForm;