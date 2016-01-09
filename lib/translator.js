/**
 *
 Exports the Translator function creating a singleton for a React class
 that can be used like <T label="namespace.string"/>.
 package docu here: https://github.com/TAPevents/tap-i18n
 */

//i18n.setLocale('de-DE', {});
//i18n.getLocale(); //en-US

function getLang() {
    if (typeof navigator !== 'undefined') {
        if (navigator.languages !== undefined) {
            return navigator.languages[0];
        }
        return navigator.language || navigator.browserLanguage;
    } else {
        console.log("No language found.");
    }
}

if (Meteor.isClient) {
    Meteor.startup(function () {
        const fallback = "en";
        Session.set("showLoadingIndicator", true);
        let lng = getLang();
        if (!lng || !(lng.substring(0, 2) in TAPi18n.getLanguages())) {
            lng = fallback;
        }
        lng = lng.substring(0, 2); //TODO: de-DE should work out of the box, why do we need this? oO
        TAPi18n.setLanguage(lng)
            .done(function () {
                //TODO: We probably want to show some loading indicator.
                Session.set("showLoadingIndicator", false);
            })
            .fail(function (error_message) {
                // TODO: Handle the situation. Show error? Reload? Panic?
                console.error("Error setting language to ", lng, error_message);
            });

        // Set the locale for the moment library, too.
        _Deps.moment.locale(lng);
    });
}

T = TAP;