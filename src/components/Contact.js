import React from "react";
import axios from "axios";

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            datas: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            const datas = res.data;
            this.setState({
                datas: datas
            })
        })
    }    

    render() {

        const displayContacts = () => {
            //To retrieve array by index, need to first check the length
            if(this.state.datas.length > 0) {
                return(
                    <div>
                        <p>{this.state.datas[0].name}</p>
                        <p>{this.state.datas[0].email}</p>
                        <p>{this.state.datas[0].phone}</p>
                    </div>                
                );
            }
        }

        return (
            <div>
                <h1>Contact Us</h1>
                {displayContacts()}
            </div>
            
            
        );
    }
}

export default Contact;