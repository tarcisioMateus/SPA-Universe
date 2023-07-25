import { Router } from "./router.js"

const router = new Router()
router.add('/', "../page/home.html")
router.add('/universe', "../page/universe.html")
router.add('/explorer', "../page/explorer.html")




window.onpopstate = () => router.handel()
window.route = () => router.route()
router.handel()