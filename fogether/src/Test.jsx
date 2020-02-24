import React from 'react';

export default function test() {
    return (
        <div className="App">
            <h1>Hello</h1>
            <button className="btn btn-md btn-success" onClick={this.addUser}>Add User</button>
            <br /><br />
            <button className="btn btn-md btn-success" onClick={this.getUsers}>Get User</button>

        </div>
    );
}
