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
            <div>

                {this.state.loaded ? <PlayerCardList data={this.state.data} /> : null}

            </div>
        )
    }
}

export default Fifa;