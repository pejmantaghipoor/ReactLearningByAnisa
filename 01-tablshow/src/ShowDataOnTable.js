import React, { Component } from 'react'
import './ShowDataOnTable.css'


export default class ShowDataOnTable extends Component {
    constructor() {
        super()
        this.state = {
            users:
                [
                    {
                        "id": 1,
                        "name": "ali",
                        "username": "b1",
                        "email": "Sincere@april.biz",
                        "address": {
                            "street": "Kulas Light",
                            "suite": "Apt. 556",
                            "city": "Gwenborough",
                            "zipcode": "92998-3874",
                            "geo": {
                                "lat": "-37.3159",
                                "lng": "81.1496"
                            }
                        }
                    }
                    ,
                    
                    {
                        "id": 2,
                        "name": "moh",
                        "username": "a1",
                        "email": "Shanna@melissa.tv",
                        "address": {
                            "street": "Victor Plains",
                            "suite": "Suite 879",
                            "city": "Wisokyburgh",
                            "zipcode": "90566-7771",
                            "geo": {
                                "lat": "-43.9509",
                                "lng": "-34.4618"
                            }
                        }
                    }
                ],
            isToggle: true
        }
    }

    componentDidMount() {
        console.log(this.state.users)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(   (response) =>  response.json()  )
            .then( (data) => this.setState({ users: data })
            )
    }

    render() {
        return (
            <div>
                <table  >
                    <thead>
                        <tr className={'apptable'}>
                            <th key='th1'> "name" </th>
                            <th key='th2'> "email" </th>
                            <th key='th3'> "website" </th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.state.users.map((user) => { return ( 
                            <tr key={'tr'+user.id}>
                            <td key={'name'+user.id} > {user.name}</td> 
                            <td key={'email'+user.id} >{user.email}   </td>
                            <td key={'website'+user.id} > {user.website} </td> 
                             </tr>
                             ) })}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}
