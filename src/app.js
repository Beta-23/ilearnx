console.log('App is loading...Testing babel');

// JXS - JavaScript XML extensions

const appObj = {
    title: 'iLearnx App',
    subtitle: 'What Should I learn next?',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
  
    const option = e.target.elements.option.value;
  
    if (option) {
      appObj.options.push(option);
      e.target.elements.option.value = '';
      render();
    }
};

const removeAll = () => {
    appObj.options = [];
    render();
}

const appRoot = document.getElementById('app');


const render = () => {
    const template = (
        <div>
            <h1>{ appObj.title }</h1>
            { appObj.subtitle && <p>{appObj.subtitle }</p>}
            <p>{appObj.options.length > 0 ? 'Here are your options' : 'No Options'}:</p>
            <ol>
            {/*map over appObj.options getting back an array of list */}
            {
                appObj.options.map((option) => {
                    return <p key={option}>Your Choice: {option}</p>;
                })
            }    
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Your Course Choice</button>
            </form>
            <p>Cart: {appObj.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();