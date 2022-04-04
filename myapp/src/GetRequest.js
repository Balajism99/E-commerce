import React from 'react';
import axios from 'axios';

export default class Background extends React.Component{
    state = {
        persons:{},
        book:[]
    }

    componentDidMount(){
        axios.get(` http://localhost:8081/api/book `)
        .then(res =>{
            const persons = res.data;
            this.setState ({persons});
            const book = persons.book;
            this.setState({book})

        })

    }
    render(){
        return(
            <ul>
                {this.state.book.map((data) =>
                    <li key={data._id}>{data.title}</li>)}
              
            
            </ul>
        )
    }
    
    
}