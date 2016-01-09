/**
 * Created by dmnk on 13.12.2015.
 */
/**
 * Subscribe to all the collections for now.
 */
function subscribe(name) {
    console.log("Subscribing to ", name);
    Meteor.subscribe(name, {
        onStop(err) {
            console.log(name, "Stopped.", err)
        },
        onReady() {
            console.log(name, "ready")
        }
    });
}
Collections.forEach(subscribe);

/**
 * Additional subscriptions
 */
subscribe('userdata');
