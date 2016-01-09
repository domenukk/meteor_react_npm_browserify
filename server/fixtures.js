/**
 * This file initializes the collections with some dummy data.
 */

/**
 * Check if this collection is empty
 * @param collection the collection
 * @returns {boolean}
 */
function isEmpty(collection) {
    return collection.find().count() === 0;
}

try {
    Accounts.createUser({
        username: "testuser",
        email: "test@testus.er",
        password: "1234567890",
        profile: {
            name: "Test User"
        }
    });
} catch (ex) {
    console.log("testuser already exists.")
}