const {
    List,
    ListItem,
    Divider,
    RadioButton,
    Avatar
    } = MUI;

Login = React.createClass({
    propTypes: {
        next: React.PropTypes.string
    },
    getDefaultProps() {
        return {
            next: "/dashboard"
        }
    },
    render() {
        // Just render a placeholder container that will be filled in
        return (
            <div className="" style={{padding: '30px 15px'}}>
                <Accounts.ui.LoginFormSet redirect={()=> FlowRouter.go(this.props.next)}/>
            </div>
        )
    }
});