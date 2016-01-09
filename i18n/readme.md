You can translate the whole app using the <T label="some.thing" /> tags.
It's using the tap-i18n library and an react wrapper.

If you want to add a language, just create a json here.
If you want a language to be included in the inital page load, add it in `project-tap.i18n`.
If you need different locales for the same language, you'll have to change lib/translator.js.

If you want moment.js to support more languages, require them in /client/lib/app.browserify.js