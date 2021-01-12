import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:5000/api/clients', {
            method: 'GET',
            mode: 'no-cors'
        });
      //  const data = await response.json();
        console.log(response);
    }


    handleSubmit(event) {
        console.log(`login: ${event.target[0].value} ; password: ${event.target[1].value}`);
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <h2>Connexion</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Adresse mail</label>
                        <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Adresse mail" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Mot de passe</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mot de passe" />
                    </div>
                    <button type="submit" className="btn btn-primary">Connexion</button>
                </form>
            </div>
        );
    }

}

export default Login;
