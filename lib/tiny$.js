/*
 TAPi18n depends on $.ajax but we don't want to include jQuery. Hack That.
 */

$ = {
    ajax(options)
    {
        const {type, url, dataType, success, async} = options;
        if (dataType !== "json" || type !== "GET") {
            throw Error("This call is not supported right now. Go implement it if you want.", type, url, dataType, options);
        }
        function reqListener() {
            success(JSON.parse(this.responseText));
        }

        const req = new XMLHttpRequest();
        req.addEventListener("load", reqListener);
        req.open("GET", url);
        req.send();
    }
};