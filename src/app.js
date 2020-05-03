class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>iLearnx App</h1>
                <h2>Let an al·go·rithm show your learning path!</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What langueage should I learn?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        const app = {
            options: ['a','b','c']
        };
        return (
            <div>
                <h3>Your Options:</h3>
                {app.options[0]}
                <p>{ app.options[1]}</p>
                <p>{ app.options[2]}</p>
            </div>
        );
    }
}

class AddOptions extends React.Component {
    render() {
        return (
            <div>
                <button>Add Your Langueage Choice</button>
            </div>
        );
    }
}

const appJsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOptions />
    </div>
);

ReactDOM.render(appJsx, document.getElementById('app'));