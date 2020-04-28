console.log('App is loading...Testing babel');

let visibility = false;

const changeVisibility = () =>{
 visibility = !visibility;
 render();
};

const render = () => {
    const toggle = (
        <div>
            <h1>Toggle</h1>
                <button onClick={changeVisibility}>
                    { visibility ? 'HIDE DETAILS' : 'SHOW DETAILS' }
                </button>
                {visibility && (
                    <div>
                        <p>Your Details Here!</p>
                    </div>
                )}    
        </div>
    );

    ReactDOM.render(toggle, document.getElementById('app'));
}

render();
