const {
    Toolbar,
    ToolbarGroup,
    FlatButton,
    Tabs,
    Tab
    } = MUI;

SubHeaderBar = React.createClass({
    mixins: [ReactMeteorData],
    propTypes: {
        hideIfEmpty: React.PropTypes.bool
    },
    getDefaultProps() {
        return {
            hideIfEmpty: true
        }
    },
    getMeteorData() {
        return {
            allowedRoutes: Router.allowedRoutes,
            selected: FlowRouter.current().path
        }
    },
    getTabs() {
        return this.data.allowedRoutes.map((route) =>
            route.showInSubheader
                ? <Tab
                key={route.url}
                value={route.url}
                label={<T label={route.i18n}/>}
                onActive={ ()=>FlowRouter.go(route.url)}/>
                : null
        ).filter(Boolean);
    },
    render() {
        const tabs = this.getTabs();
        if ((!tabs || tabs.length === 0) && this.props.hideIfEmpty) {
            return null
        }
        return (
            <Tabs value={this.data.selected}
                  style={{background: '#424242'}}
                  tabItemContainerStyle={{background: '#424242'}}>
                {tabs}
            </Tabs>
        )
    }
});
