import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';

class IlearnxApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePickOptions=this.handlePickOptions.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteIndividualOption=this.handleDeleteIndividualOption.bind(this);
        this.state = {
            options: []
        };
    }
    // Lifecycle methods
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (option) {
                this.setState(() => ({ options })); 
            }

            } catch (e) {
                // Do nothing at all  
        }   
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('Saving Data to Local Storage!');
        }
        
    }

    componentWillUnmount() {
        console.log('App WillUnmount!');
    }

    // Event handler implicit setState object
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteIndividualOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    // Event handler
    handlePickOptions() {
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randomNum];
            return alert(`Our pick is: ${option}`)
    }
    // Event handler from child
    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid value for language choice!';
        } else if (this.state.options.indexOf(option) > -1) {
            return alert('This language is already in you choices!');
        } 

        this.setState((prevState) => ({ 
            options: prevState.options.concat(option) 
        }));
    }

    render() {
        const subtitle = 'Let an al·go·rithm show your learning path!';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                hasOptions={ this.state.options.length > 0 } 
                handlePickOptions={this.handlePickOptions}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteIndividualOption={this.handleDeleteIndividualOption}
                />
                <br />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
};

ReactDOM.render(<IlearnxApp />, document.getElementById('app'));



