console.log('App is loading...Testing babel');

// JXS - JavaScript XML extensions

const appObj = {
    title: 'iLearnx App',
    subtitle: 'What Should I learn next?',
    options: []
    
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.traget.elements.option.value;

    if (option) {
        appObj.options.push(option);
        e.traget.elements.option.value = '';
    }
};

const template = (
    <div>
        <h1>{ appObj.title }</h1>
        { appObj.subtitle && <p>{appObj.subtitle }</p>}
        <p>{appObj.options.length > 0 ? 'Here are your options' : 'No Options'}:</p>
        <p>{appObj.options.length}</p>
        <ul>
            <li>{ appObj.options }</li>   
        </ul>

        <form onSubmit={onFormSubmit}>
            <input type='text' name='option' />
            <button>Add Your Course Choice</button>
        </form>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
