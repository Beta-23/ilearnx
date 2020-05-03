class Header extends React.Component {
    render() {
        return <h1>HEADER</h1>
    }
}

const jsx = (
    <di>
        <h1>Title</h1>
        <Header />
    </di>
);

ReactDOM.render(jsx, document.getElementById('app'));