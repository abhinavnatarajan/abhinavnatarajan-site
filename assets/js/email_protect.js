import * as params from '@params';

function uglyEmail (str) {
    return str.replace('@', ' [at] ');
}

function reverseString(str) {
    return str.split("").reverse().join("")
}

// only compute the email when it is within the viewport
const emailToDisplay = uglyEmail(atob(params.email));
const emailLink = 'mailto: ' + atob(params.email);
document.getElementById('person-email-text').textContent = emailToDisplay;
let emailLinkTag = document.getElementById('person-email-link');
function mouseOverEmail(event) {
    event.currentTarget.href = emailLink;
}
function mouseOutEmail(event) {
    event.currentTarget.href = ''
}
emailLinkTag.addEventListener('mouseover', mouseOverEmail);
emailLinkTag.addEventListener('focus', mouseOverEmail);
emailLinkTag.addEventListener('mouseout', mouseOutEmail);