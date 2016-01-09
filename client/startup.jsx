/**
 * Client started up.
 */
injectTapEventPlugin(); // React needs this for some click things to work

Meteor.startup(()=>{
    /* Reshape DOM: put back title and meta elements in the head.
    (We put them into the body in /server/injections.js before)
    */
    const head = document.getElementsByTagName('head')[0];
    ['link', 'script'].forEach((tag) => {
        var nodes = document.getElementsByTagName(tag);
        _.forEach(nodes, (node)=>head.appendChild(node));
    });

    /* remove the spinner that's still spinning in the background.
    If you want to use it again for something else, just hide it here.
     */
    const spinner = document.getElementsByClassName("spinner")[0];
    spinner.parentNode.removeChild(spinner);

    //reset body to scroll :)
    document.getElementsByTagName("body")[0].style.overflow = "auto";
});