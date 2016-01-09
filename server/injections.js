/**
 * Created by dmnk on 06.01.2016.
 * This class contains everything that's injected into the page.
 * Currently this is the meta tag for mobile devices as well as a loading screen.
 */

const color = "#ff6d00"; //$orange-a700
const bgColor = "#fafafa"; //grey50
const lightGrey = "#e0e0e0"; //grey300

const fgOpacity = 1;
const dimOpacity = .30;

const colorR = parseInt(color.substr(1, 2), 16);
const colorG = parseInt(color.substr(3, 2), 16);
const colorB = parseInt(color.substr(5, 2), 16);

Inject.rawHead('meta', '<meta name="viewport" content="user-scalable=no, width=device-width, maximum-scale=1, ' +
    'initial-scale=1, minimum-scale=1">');
//See http://pem-musing.blogspot.de/2014/12/the-fastest-loading-screen-for-meteor.html
Inject.rawHead('loader-style',
    /* Force the initial scale for Android and iOS as our spinner may be
     distorted by their default viewport values.*/
    /* The loading spinner needs some theming. */
    '<style>' +
    `html{background-color: ${bgColor};}` +
    `body{color:${lightGrey};overflow:hidden;width:100%;}` +
    '.spinner {' +
    'bottom:0;height:80px;left:0;margin:auto;position:absolute;' +
    'top:0;right:0;width:80px;' +
    '-webkit-animation: rotation .6s infinite linear;' +
    'animation: rotation .6s infinite linear;' +
    `border-left:6px solid rgba(${colorR},${colorG},${colorB},${dimOpacity});` +
    `border-right:6px solid rgba(${colorR},${colorG},${colorB},${dimOpacity});` +
    `border-bottom:6px solid rgba(${colorR},${colorG},${colorB},${dimOpacity});` +
    `border-top:6px solid rgba(${colorR},${colorG},${colorB},${fgOpacity});` +
    'border-radius:100%;' +
    '}' +
    '@-webkit-keyframes rotation {' +
    'from {-webkit-transform: rotate(0deg);}' +
    'to {-webkit-transform: rotate(359deg);}' +
    '}' +
    '@-moz-keyframes rotation {' +
    'from {-moz-transform: rotate(0deg);}' +
    'to {-moz-transform: rotate(359deg);}' +
    '}' +
    '@-o-keyframes rotation {' +
    'from {-o-transform: rotate(0deg);}' +
    'to {-o-transform: rotate(359deg);}' +
    '}' +
    '@keyframes rotation {' +
    'from {transform: rotate(0deg);}' +
    'to {transform: rotate(359deg);}' +
    '}' +
    '</style>');
// The loading spinner is a CSS animation.
// /!\ WARNING: The trick is to create a fake body by injecting data
// in the HTML's head as Meteor is requesting JS  file in a blocking
// fashion and mobile only allow 1 HTTP request at a time on a GPRS network.
Inject.rawHead('loader-body2', '<body><div class="spinner"></div></body>');