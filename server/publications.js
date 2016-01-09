/**
 * Created by dmnk on 13.12.2015.
 */
/** This file contains all publications the server exposes.
 */

function user(userId) {
    return Meteor.users.findOne(userId);
}

/**
 * Publications that the apps can subscribe to.
 * Key = the name of the publication, value = the function executing the query.
 * @type {{qlocations: publications.qlocations, qorders: publications.qorders, qevents: publications.qevents, qproducts: publications.qproducts, qcustomers: publications.qcustomers, singleProduct: publications.singleProduct}}
 */
const publications = {
    /*something(_id) {
        return Collection.find(_id);
    },*/
    collection() {
        return Collection.find();
    },
    someOtherThing() {
        if (user(this.userId).isAwesome) {
            return Collection.find({awesome: true});
        }
    },
    userdata() {
        return Meteor.users.find({_id: this.userId}, {fields: {profile: 1, vendor: 1, user: 1}});
    }
};

/**
 * Logs an error if a collection without publication exists.
 * This collection will not be (automatically) updated on the client!
 * @param collections
 * @param publications
 */
function checkMissingPublications(collections, publications) {
    collections.forEach((collectionName) => {
        if (!(collectionName in publications)) {
            console.error(collectionName, " is a declared connection but not in publications!");
        }
    });
}

/**
 * Registers all the publication in the given object.
 * It's caled automatically. Just ignore :)
 * @param publications an object with publicationName: pubFunction
 */
function registerAll(publications) {
    _.each(publications, (func, name) => {
        console.log("creating publish ", name);
        Meteor.publish(name, func);
    });
}

checkMissingPublications(Collections, publications);
registerAll(publications);
