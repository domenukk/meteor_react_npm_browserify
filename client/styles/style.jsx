MuiTheme = function () {
    const Styles = MUI.Styles;
    const ThemeManager = Styles.ThemeManager;
    const theme = Styles.LightRawTheme;
    const newPaletteVals = {
        primary1Color: Styles.Colors.orange800,
        accent1Color: Styles.Colors.orangeA700,
        accent2Color: Styles.Colors.orangeA400
    };

    _.extend(theme.palette, newPaletteVals); // Copy all new values over the old ones.
    ThemeManager.getMuiTheme(theme)
}();