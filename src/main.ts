import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router"
import App from './App.vue'
import Home from "./views/Home.vue"

// A Level Maths views
import ProofSetsLogic from "./views/ALM/Pure/ProofSetsLogic.vue"
import AlgebraFunctions from "./views/ALM/Pure/AlgebraFunctions.vue"
import CoordinateGeometry from "./views/ALM/Pure/CoordinateGeometry.vue"
import SequencesSeries from "./views/ALM/Pure/SequencesSeries.vue"
import Differentiation from "./views/ALM/Pure/Differentiation.vue"
import Integration from "./views/ALM/Pure/Integration.vue"
import NumericalMethods from "./views/ALM/Pure/NumericalMethods.vue"
import Vectors from "./views/ALM/Pure/Vectors.vue"






interface Route {
    path: string;
    name: string;
    component: object;
}
let paths : Route[] = [
    { path: "/", name: "Home", component: Home },
    { path: "/alevelmaths/proof-sets-logic", name: "Mathematical Proof, Sets and Logic", component: ProofSetsLogic },
    { path: "/alevelmaths/algebra-functions", name: "Algebra and Functions", component: AlgebraFunctions },
    { path: "/alevelmaths/coordinate-geometry", name: "Coordinate Geometry", component: CoordinateGeometry },
    { path: "/alevelmaths/sequences-series", name: "Sequences and Series", component: SequencesSeries },
    { path: "/alevelmaths/differentiation", name: "Differentiation", component: Differentiation },
    { path: "/alevelmaths/integration", name: "Integration", component: Integration },
    { path: "/alevelmaths/numerical-methods", name: "Numerical Methods", component: NumericalMethods },
    { path: "/alevelmaths/vectors", name: "Vectors", component: Vectors }
]
const router = createRouter({
    history: createWebHistory(),
    routes: paths
})

createApp(App)
.use(router)
.mount('#app')
