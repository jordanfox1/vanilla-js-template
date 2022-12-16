import { showabout } from "./tools/about/about"
import { showhome } from "./tools/home";

let location = window.location.pathname;
if (location.length == 0) {
    location = '/'
}

switch (location) {
    case '/home':
        showhome()
        break;
    case '/about':
        showabout()
        break;
    default:
        showhome()
        break;
}

document.body.appendChild(document.createElement('br'))
