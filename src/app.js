class IlearnxApp extends React.Component {
    render() {
        const title = 'iLearnx App';
        const subtitle = 'Let an al·go·rithm show your learning path!';
        const options = ['Thing1', 'Thing2', 'Thing3'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options} />
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
    handlePick() {
        alert('handlePick class hitting!')
        console.log('Action onClick working...')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What langueage should I learn?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    removeAllOptions() {
        
    }
    render() {
        return (
            <div>
                <Option />
                <p>{this.props.options.length > 0 ? 'Here Are Your Options:' : 'No Options!'}</p>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                } 
                <button onClick={this.removeAllOptions}>Remove All</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
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