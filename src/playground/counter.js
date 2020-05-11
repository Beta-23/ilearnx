class Counter extends React.Component {
    
    handleAddOne() { 
        console.log('addOne is working!');
    }

    handleMinusOne() {
        console.log('minusOne is working!');
    }

    handleReSet() {
        console.log('reSet is working!');
    }
    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <br />
                <button>Reset</button>
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