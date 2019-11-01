import React from 'react';
import axios from 'axios';
import PlayerCardList from './PlayerCardList';

class Fifa extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loaded: false
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then(res => this.setState({
                data: res.data,
                loaded: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        return(
            <nav className="navBar">
                <div className="App">
                    {this.state.loaded ? <PlayerCardList data={this.state.data} /> : null}
                </div>
            </nav>
        )
    }
}

export default Fifa;