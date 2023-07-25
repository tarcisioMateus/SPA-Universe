export class Router {

    routes = {}

    add(name, page) {
        this.routes[name] = page
    }

    route (e) {
        e = e || window.event
        e.preventDefault()
    
        window.history.pushState({}, "", e.target.href)
    
        this.handel()
    }
    
    handel () {
        const {pathname} = window.location
    
        const endpoint = this.routes[pathname] || this.routes['/']
    
        fetch(endpoint).then(data => data.text()).then( html => {
            document.querySelector("#app").innerHTML = html
        }
        )
    }
}