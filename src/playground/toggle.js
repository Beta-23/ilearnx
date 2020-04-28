console.log('App is loading...Testing babel');

let visibility = false;

const changeVisibility = () =>{

}

const render = () => {
    const toggle = (
        <div>
            <h1>Toggle</h1>
            <button onClick={changeVisibility}>
            {visibility ? 'HIDE DETAILS' : 'SHOW DETAILS' }
            </button>
        
        </div>
    );
    ReactDOM.render(toggle, document.getElementById('app'));
}
render();
