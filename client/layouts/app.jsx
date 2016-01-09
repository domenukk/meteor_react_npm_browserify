App = React.createClass({
    propTypes: {
        content: React.PropTypes.element,
    },
    getChildContext() {
        return {
            // With childContext we can pass stuff through the app that we don't want to have to declare every single time.
            muiTheme: MuiTheme
        };
    },
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    // TODO: <header id="site-header" style={{position: "fixed", zIndex: 1000, height: 128, width: "100%"}}>
    render() {

        return (
            <div className="site" style={{margin: 0}}>
                <header id="site-header">
                    <HeaderBar style={{background: "transparent"}}/>
                    <SubHeaderBar />
                </header>
                <div className="maincontainer">

                    {this.props.content ?

                            <React.addons.CSSTransitionGroup transitionName="example"
                                                             transitionEnterTimeout={500}
                                                             transitionLeaveTimeout={500}
                                                             transitionAppear={true} transitionAppearTimeout={500}>

                                {this.props.content}

                            </React.addons.CSSTransitionGroup>

                        : null}

                </div>
                <Footer />
            </div>
        )
    }
});
