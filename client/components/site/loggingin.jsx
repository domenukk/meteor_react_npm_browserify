const {
    } = MUI;

NoAccess = React.createClass({
    mixins: [ReactMeteorData],
    propTypes: {
        next: React.PropTypes.string
    },
    getMeteorData() {
        return {
            loggingIn: Meteor.loggingIn(),
            user: Meteor.user()
        }
    },
    render() {
        // Just render a placeholder container that will be filled in
        return (
            <div>
                <h1>TODO</h1>
            </div>
        )
    }
});