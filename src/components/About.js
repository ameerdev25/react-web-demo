import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            datas: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            const datas = res.data;
            this.setState({
                datas: datas
            })
        })
    }

    render() {
        return (
            <div>
                <h1>About Us</h1>
                {this.state.datas.map(data => <p>{data.body}</p>)}
            </div>
            
        );
    }
}

export default About;