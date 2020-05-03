class Header extends React.Component {
    render() {
        return <h1>HEADER</h1>
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));