/**
 * Adding routes can be done here.
 * In addition to routing, this also checks basic groups.
 * TODO: Try if we get Server Side Rendering (SSR) to work easily.
 *
 * To add a route, start reading at about 50% of this file.
 * It's easy but I hope to make this even more pleasant, probably using
 * https://github.com/kadirahq/meteor-reaktor
 *
 * To add a group to the menu, set
 showInSubheader: true,
 and the i18n name.
 **/

/* The strings attached to groups.
Use them for navigating to the right routes.
Note that this is not save on the client side!
 */
ACCESS_USER = "user";
ACCESS_LOGGED_IN = "loggedIn";
ACCESS_LOGGED_OUT = "loggedOut";
ACCESS_ADMIN = "admin";

/**
 * Router API that can be used anywhere to get informations about groups etc.
 * We use it for dynamic menus.
 * @type {{routes, isAllowed: (function(*, *=)), isCurrentlyAllowed: (function(*=)), currentAccesses, allowedRoutes}}
 */
Router = {
    get routes() {
        if (!this._routes) {
            this._routes = {};
            FlowRouter._routes.forEach((route) => {
                groupName = route.group ? route.group.name : this.loggedOutAccess;
                this._routes[route.pathDef] = {
                    name: route.name,
                    url: route.pathDef,
                    i18n: route.options.i18n,
                    showInSubheader: (route.options.showInSubheader ? true : false),
                    access: groupName
                }; //ToDo: Use path instead?
            });
        }
        return this._routes;
    },
    isAllowed(path, accesses) {
        if (!path.startsWith("/")) {
            path = "/" + path;
        }
        let allowedAccess = this.routes[path].access;
        if (!allowedAccess) {
            allowedAccess = ACCESS_LOGGED_OUT;
        }
        return _.any(accesses, (access) => allowedAccess === access);
    },
    isCurrentlyAllowed(path) {
        return this.isAllowed(path, this.currentAccesses);
    },
    get currentAccesses() {
        const user = Meteor.user();
        let accesses = [ACCESS_LOGGED_OUT];
        if (user) {
            accesses.push(ACCESS_LOGGED_IN);
            if (user.admin) {
                accesses.push(ACCESS_ADMIN);
            }
            if (user.user) {
                accesses.push(ACCESS_USER);
            }
        }
        return accesses;
    },
    get allowedRoutes() {
        const accesses = this.currentAccesses;
        return _.map(this.routes, (content, route) => {
            if (this.isAllowed(route, accesses)) {
                return content
            }
        }).filter(Boolean)
    }
};

/**
 * If we don't have access, redirect.
 * @param checkAccess
 * @returns {Function}
 */
function redirectIfNoAccessFunc(checkAccess) {
    return (context, redirect)=> {
        if (!checkAccess()) {
            redirect("/accessDenied", null, {next: context.path});
        }
    }
}

/**
 * Group for all loggedIn users
 */
var loggedIn = FlowRouter.group({
    name: ACCESS_LOGGED_IN,
    triggersEnter: [redirectIfNoAccessFunc(()=>Meteor.loggingIn() || Meteor.userId())]
});

// TODO: handle loggingIn case. :)
var admin = FlowRouter.group({
    name: ACCESS_ADMIN,
    triggersEnter: [redirectIfNoAccessFunc(()=>Meteor.loggingIn() || Meteor.user() && Meteor.user().vendor)]
});

var user = FlowRouter.group({
    name: ACCESS_USER,
    triggersEnter: [redirectIfNoAccessFunc(()=>Meteor.loggingIn() || Meteor.user() && Meter.user().user)]
});

FlowRouter.route('/loggedOut', {
    name: 'logged out',
    i18n: 'routes.logged out',
    action(params, queryParams) {
        //TODO :)
        ReactLayout.render(App, {
            content: <p>You've been logged out :)</p>
        });
    }
});

FlowRouter.route('/accessDenied', {
    name: 'accessDenied',
    action(params, queryParams) {
        let next = queryParams.next ? queryParams.next : "/";
        ReactLayout.render(App, {
            content: <Login next={FlowRouter.current.route}/>,
            titleBox: <NoAccess next={next}/>
        })
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action(params, queryParams) {
        let next = queryParams.next ? queryParams.next : "/";
        console.log("Login screen next:", next);
        if (Meteor.userId()) {
            // We don't need to log in :)
            FlowRouter.go(next)
        } else {
            ReactLayout.render(App, {
                content: <Login next={next}/>
            });
        }
    }
});

FlowRouter.route('/', {
    action(params, queryParams) {
        if (Meteor.loggingIn() || Meteor.userId()) {
            FlowRouter.go("/dashboard");
        } else {
            FlowRouter.go("/home");
        }
    }
});

FlowRouter.route('/home', {
    showInSubheader: true,
    i18n: "routes.home",
    action(params, queryParams) {
        ReactLayout.render(Landing)
    }
});

loggedIn.route('/register', {
    action(params, queryParams) {
        ReactLayout.render(Register)
    }
});

//Dashboard
loggedIn.route('/dashboard', {
    i18n: "routes.dashboard",
    showInSubheader: true,
    action(params, queryParams) {
        ReactLayout.render(App, {
            beforecontent: <Dashboard />
        })
    }
});


todo = (params, queryParams) => {
    ReactLayout.render(App, {
        content: <Todo />
    })
};