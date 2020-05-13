class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    
    handleAddOne() { 
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
        console.log('handleAddOne updated state');
    }

    handleMinusOne() {
        this.setState((prevState) => {
            if (prevState.count >=1)
            return {
                count: prevState.count - 1
            };
            return alert('Count is a Zero');
        });
        console.log('handleMinusOne updated state');
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
        console.log('handleReset updated state');
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <br />
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));


// let count =0;

// const addOne = ( ) => {
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reSet = () => {
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <br />
//             <br />
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reSet}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp()