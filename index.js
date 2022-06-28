import { Router } from "./router.js"


const router = new Router()
router.add("/", "/pages/Home.html")
router.add("/oUniverso", "/pages/oUniverso.html")
router.add("/Exploracao", "/pages/Exploracao.html")

// const routes = {
//     "/": "/pages/Home.html",
//     "/oUniverso": "/pages/oUniverso.html",
//     "/Exploracao": "/pages/Exploracao.html",
// }

router.handle("/")
window.onpopstate = () => router.handle()
window.route = () => router.route()