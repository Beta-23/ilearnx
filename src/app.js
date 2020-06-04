import React from 'react';
import ReactDOM from 'react-dom';
import IlearnxApp from './components/IlearnxApp';

ReactDOM.render(<IlearnxApp />, document.getElementById('app'));

// OldSyntax
class OldSyntax {
    constructor() {
        this.name = "Mike";
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

// newSyntax
class NewSyntax {
    name = "Kitie";
}

const newSyntax = new NewSyntax();
console.log(newSyntax);

