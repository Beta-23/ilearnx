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
  
  const appRoot = document.getElementById('app');

  const render = () => {
    const template = (
        <div>
            <h1>{ appObj.title }</h1>
            { appObj.subtitle && <p>{appObj.subtitle }</p>}
            <p>{appObj.options.length > 0 ? 'Here are your options' : 'No Options'}:</p>
            <p>{appObj.options.length}</p>
            <ol>
                <li>{ appObj.options }</li>   
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Your Course Choice</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}


render();