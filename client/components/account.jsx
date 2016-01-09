const {
    RaisedButton
    } = MUI;

Account = React.createClass({
    mixins: [ReactMeteorData],
    propTypes: {
        onLoggedOut: React.PropTypes.func,
        next: React.PropTypes.string,
        applyMargin: React.PropTypes.bool
    },
    getDefaultProps() {
        return {
            onLoggedOut() {
                FlowRouter.go('/home')
            },
            next: "/dashboard",
            applyMargin: false
        }
    },
    getMeteorData() {
        return {
            userId: Meteor.userId(),
            loggingIn: Meteor.loggingIn()
        }
    },
    logout() {
        console.log("Logging out...");
        Meteor.logout(
            (err) => {
                if (err !== undefined) {
                    console.error("Error logging out", err)
                } else {
                    console.log("Logged out.");
                }
                this.props.onLoggedOut();
            });
    },

    render() {
        style = this.props.applyMargin ? {margin: '10px 24px'} : {};
        //TODO: Dirty style hack

        if (this.data.loggingIn || this.data.userId) {
            return (
                <RaisedButton label="Logout" linkButton={true}
                              onClick={ this.logout } style={style}
                />)
        } else {
            return (<RaisedButton label="Anmelden" linkButton={true}
                                  href={"login?next=" + this.props.next}
                                  style={style}
            />);
        }
    }
});