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
                <p>Your Options:</p>
                {app.options[0]}
                <p>{ app.options[1]}</p>
                <p>{ app.options[2]}</p>
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));