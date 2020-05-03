class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>iLearnx App</h1>
                <h2>Let an al·go·rithm show you a learning path!</h2>
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
        <h1>Title</h1>
        <Header />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));