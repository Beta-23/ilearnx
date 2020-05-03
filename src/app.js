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

const jsx = (
    <div>
        <Header />
        <Action />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));