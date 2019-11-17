import React from 'react';
import '../App.css'

class MovieForm extends React.Component{
    state = {
        title:'',
        globalTitle: document.title,
        comment:'', 
        poster:'', 
        sent: false
    }

    componentDidMount() {
        console.log("Rendered Form")
    }

    onSubmit = (event) => {
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };

        fetch(url, config)
            .then(res => res.json())
                .then(res => {
                    if (res.error) {
                        alert(res.error);
                      } else {
                        this.setState({ sent : true })
                        alert(`Added Movie with the ID ${res}!`);
                      }
                })
                .catch(e => {
                    console.error(e);
                    alert('Error during movie addition');
                  });

        this.setState({
            globalTitle: 'My form -'
        })
        
        event.preventDefault();
    }

    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
          sent: false
        });
      }

    componentDidUpdate = () => {
        document.title = this.state.globalTitle
    }

    render() {
        return(
            <div className="form-container">
                <form onSubmit={this.onSubmit} className="form-zone">
                    <label htmlFor="input-title">Movie Title</label>
                    <input type="text" name="title" id="input-title" value={this.state.title} onChange={this.onChange}></input>
                    <label htmlFor="input-url">URL Movie Poster</label>
                    <input type="text" name="poster" id="input-url" value={this.state.url} onChange={this.onChange}></input>
                    <label htmlFor="input-content">Comment</label>
                    <textarea id="input-content" name="comment" onChange={this.onChange} value={this.state.value}></textarea>
                    <input type="submit" />
                </form>
                {this.state.sent && <div>Okay msg has been sent without error</div>}
            </div>
        )
    }
}

export default MovieForm;