import Home from "@/pages/Home";
import About from "@/pages/About";
import Comp from "@/pages/Comp";

import VueRouter from "vue-router";
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/comp", component: Comp },

]
const router = new VueRouter({
    routes,
})
export default router
