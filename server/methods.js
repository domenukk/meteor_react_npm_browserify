/**
 * This file contains all methods the server can do
 */

Meteor.methods({
    getCurrentTime() {
        console.log('on server, getCurrentTime called');
        return new Date();
    }
});
