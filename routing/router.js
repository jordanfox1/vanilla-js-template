const urlPageTitle = ''

document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav a")) {
        return;
    }
    route();
    // e.preventDefault()
})

const urlRoutes = {
    404: {
        template: "routing/pages/404.html",
        title: '',
        description: '',
    },
    "/home": {
        template: "routing/pages/home.html",
        title: '',
        javascript: '../scripts/home.js',
        description: ''
    },
    "/about": {
        template: "routing/pages/about.html",
        title: '',
        javascript: '../scripts/about/about.js',
        description: ''
    },

}

const route = (event) => {
    event = event || window.event
    window.history.pushState({}, '', event.target.href)
    urlLocationHandler()
}

const urlLocationHandler = async () => {
    const location = window.location.pathname;
    if (location.length == 0) {
        location = '/'
    }
    const targetRoute = urlRoutes[location] || urlRoutes[404]

    // fetching our html
    const html = await fetch(targetRoute.template)
    const response = await html.text()
    document.getElementById("content").innerHTML = response

    // check for old script, if there place new script after it and delete
    const oldScript = document.querySelector('script')
    console.log(oldScript, '!!!!!!!!')

    if (oldScript) {
        console.log(oldScript, '!!!!!!!!')
        const newScript = document.createElement('script', {type: "module"})
        const scriptSrc = targetRoute.javascript

        newScript.setAttribute('src', scriptSrc);
        newScript.setAttribute('type', 'module');
        oldScript.parentNode.insertBefore(newScript, oldScript.nextSibling)
        oldScript.parentNode.removeChild(oldScript)
    }
}

window.onpopstate = urlLocationHandler
window.route = route