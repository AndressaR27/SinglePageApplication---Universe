 export class Router {
    routes = {}

    add(routeName, pageLink) {
        this.routes[routeName] = pageLink
    }

    route (event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }
    
    handle(){
        const { pathname } = window.location
        const route = this.routes[pathname]
        
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('div').innerHTML = html 
        })
    
        console.log(pathname)
    
        this.ChangeclassesHtml(pathname)
    }

    ChangeclassesHtml (pathname) {
        const imagemFundo = document.querySelector('body')
        const estilo = document.querySelector('div')
        imagemFundo.className = ""
        estilo.className = ""
       
        switch (pathname){
            case "/oUniverso":
            imagemFundo.classList.add("body2")
            estilo.classList.add('div-conteudo1')
            break;
    
            case "/Exploracao": 
            imagemFundo.classList.add("body3")
            estilo.classList.add('div-conteudo1')
            break;
    
            case "/":
            imagemFundo.classList.add("body")
            estilo.classList.add('div-conteudo')
            break;
    
            default:
                break;
        }
    }
}