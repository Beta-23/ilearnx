class IlearnxApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePickOptions=this.handlePickOptions.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }
    // Event handler
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }
    // Event handler
    handlePickOptions() {
        this.setState(() => {
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randomNum];
            return alert(`Our pick is: ${option}`)
        });
    }
    // Event handler from child
    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid value for language choice!';
        } else if (this.state.options.indexOf(option) > -1) {
            return alert('This language is already in you choices!');
        } 

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }

    render() {
        const title = 'iLearnx App';
        const subtitle = 'Let an al·go·rithm show your learning path!';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                hasOptions={ this.state.options.length > 0 } 
                handlePickOptions={this.handlePickOptions}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <br />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
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
                <button 
                    onClick={this.props.handlePickOptions}
                    disabled={!this.props.hasOptions}
                    >
                    What langueage should I learn?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                <Option />
                <p>{this.props.options.length > 0 ? 'Here Are Your Options:' : 'No Options!'}</p>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                } 
                <br />
                <button 
                    disabled={this.props.options.length === 0} 
                    onClick={this.props.handleDeleteOptions}
                    >
                    Remove All
                </button>
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

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
  
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option); 

        this.setState(() => {
            return { error };
        });
    }
    render() {
        return (
            <div>
                { this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Your Langueage Choice</button>
                </form>   
            </div>
        );
    }
}

// stateless functional component for User
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

ReactDOM.render(<User name="Andy" age="26"/>, document.getElementById('app'));