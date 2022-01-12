import React from "react";
import axios from "axios";
import styled from "styled-components";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            datas: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos').then(res => {
            const datas = res.data;
            this.setState({
                datas: datas
            })
        })
    }

    render() {

        const Img = styled.img`
            width: 30%;
            margin-right: 5px;
            &:hover{
                width: 32%;
            }
        `;

        return (
            <div>
                <h1>Home</h1>
                {this.state.datas.map(data => <Img src={data.url}/>)}
                
            </div>
            
        );
    }
}

export default Home;