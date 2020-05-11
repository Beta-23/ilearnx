class Counter extends React.Component {
    render() {
        return(
            <div>
                <h1>Count: {count}</h1>
                <button onClick={addOne}>+1</button>
                <button onClick={minusOne}>-1</button>
                <br />
                <button>Reset</button>
            </div>
        )
    }
}

let count =0;

const addOne = () => {
    count++;
    console.log('addOne is working!');
}

const minusOne = () => {
    count--;
    console.log('minusOne is working!');
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