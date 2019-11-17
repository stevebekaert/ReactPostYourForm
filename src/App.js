import React from 'react';
import './App.css';
import MovieForm from './components/MovieForm';
import MessageSuccess from './components/MessageSuccess'

class App extends React.Component {
  state = {
    sent: false
  }

  onSubmit = (e) => {
    this.setState({
      sent: true
    })
    e.preventDefault()
  }

  reset = () => {
    this.setState({
      sent: false
    })
  }

  render() {
  return (
    <div className="App">
      <MovieForm onSubmit={this.onSubmit} onClick={this.reset}/>
      {this.state.sent && <MessageSuccess props={"Non"} />}
    </div>
  );
  }
}

export default App;
