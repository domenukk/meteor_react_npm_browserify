const {
    } = MUI;

NoAccess = React.createClass({
    render() {
        if (Meteor.user()) {
            return <TitleBox
                title="Keine Rechte"
                subtitle="Bitte melde dich mit einem anderen Benutzer an um auf diese Seite zuzugreifen."
                boxtype={BoxTypes.Warning}
            />
        } else {
            return <TitleBox
                title="Anmelden"
                subtitle="Bitte melde dich an um auf diese Seite zuzugreifen."
            />
        }
    }
});