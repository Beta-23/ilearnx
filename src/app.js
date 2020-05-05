class IlearnxApp extends React.Component {
    render() {
        const title = 'iLearnx App';
        const subtitle = 'Let an al·go·rithm show your learning path!';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options />
                <br />
                <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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
                <Option />
                {app.options[0]}
                <p>{ app.options[1]}</p>
                <p>{ app.options[2]}</p>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <button>Your Option:</button>
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


ReactDOM.render(<IlearnxApp />, document.getElementById('app'));