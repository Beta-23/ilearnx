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

// stateless functional component for User
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

// stateless functional component for User
const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePickOptions}
                disabled={!props.hasOptions}
                >
                What langueage should I learn?
            </button>
        </div>
    );
}

// stateless functional component for User
const Options = (props) => {
    return (
        <div>
            <Option />
            <p>{props.options.length > 0 ? 'Here Are Your Options:' : 'No Options!'}</p>
            {
                props.options.map((option) => <Option key={option} optionText={option}/>)
            } 
            <br />
            <button 
                disabled={props.options.length === 0} 
                onClick={props.handleDeleteOptions}
                >
                Remove All
            </button>
        </div>
    ); 
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    );
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }

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
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IlearnxApp />, document.getElementById('app'));