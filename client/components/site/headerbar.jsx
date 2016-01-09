const {
    Toolbar,
    ToolbarGroup,
    FlatButton,
    FontIcon,
    Avatar,
    RaisedButton
    } = MUI;

HeaderBar = React.createClass({
    render() {
        // Just render a placeholder container that will be filled in
        return (
            <Toolbar>
                <ToolbarGroup align="left">
                    <h3 id="logo"><a href={ FlowRouter.path("/home") }>Logo</a></h3>
                </ToolbarGroup>
                <ToolbarGroup float="right">
                    <Account applyMargin={true}/>
                </ToolbarGroup>
            </Toolbar>
        )
    }
});