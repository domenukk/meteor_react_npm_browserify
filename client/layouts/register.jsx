const {
    GridList,
    GridTile,
    Toolbar,
    ToolbarGroup,
    RaisedButton,
    AutoComplete
    } = MUI;

Register = React.createClass({
    propTypes: {},
    render() {
        return (
            <div id="register" className="site">
                <header id="site-header">

                    <HeaderBar />

                </header>
                <TitleBox title="Werde Anbieter"
                          subtitle="Biete deine Produkte lokal an und steigere somit deinen Umsatz"/>

                <div className="maincontainer">
                    <div className="container">

                        <CreateEvent />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
});