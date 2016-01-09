const {
    GridList,
    GridTile,
    Toolbar,
    ToolbarGroup,
    RaisedButton,
    AutoComplete
    } = MUI;
const t = "landing";

Landing = React.createClass({
    propTypes: {},
    getChildContext() {
        return {
            // With childContext we can pass stuff through the app that we don't want to have to declare every single time.
            muiTheme: MuiTheme
        };
    },
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    render() {
        const {Link, Element, Events} = _Deps.Scroll;
        return (
            <div id="landing" className="site">
                <header id="site-header">

                    <HeaderBar />

                    <div className="header-content">
                        <h1><T label="landing.header"/></h1>
                        <h2><T label="landing.subheader"/></h2>
                        <div>
                            <Link to="thisIsHow" spy={true} smooth={true} offset={0} duration={500}>
                                <RaisedButton label={<T label="landing.this is how"/>} primary={true}/>
                            </Link>
                        </div>
                    </div>

                </header>
                <SubHeaderBar />
                <div className="maincontainer">
                    <div className="titlecontainer">
                        <Element name="thisIsHow" className="element">
                            <h1><T label="landing.this is how"/></h1>
                        </Element>
                    </div>
                    <p> doing stuff</p>
                </div>

                <Footer />
            </div>
        );
    }
});