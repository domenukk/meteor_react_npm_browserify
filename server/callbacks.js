/**
 * This is called whenever a user is created. We can add stuff to the user here.
 */
Accounts.onCreateUser((options, user) => {
    if (options.profile) {
        user.profile = options.profile;
    }
    return user;
});