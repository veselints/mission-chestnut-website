import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import OurMission from './components/OurMission.vue'
import Moths from './components/Moths.vue'
import Leafs from './components/Leafs.vue'
import Birds from './components/Birds.vue'
import Traps from './components/Traps.vue'
import Results from './components/Results.vue'
import News from './components/News.vue'
import AboutUs from './components/AboutUs.vue'
import Contacts from './components/Contacts.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { name: "", path: '/', component: Home },
  { name: "", path: '/home', component: Home },
  { name: "Нашата мисия", path: '/our-mission', component: OurMission },
  { name: "Листоминиращ молец", path: '/moths', component: Moths },
  { name: "Събиране на шума", path: '/leafs', component: Leafs },
  { name: "Къщиски за птици", path: '/birds', component: Birds },
  { name: "Капани за молци", path: '/traps', component: Traps },
  { name: "Резултати", path: '/results', component: Results },
  { name: "Новини", path: '/news', component: News },
  { name: "За нас", path: '/about-us', component: AboutUs },
  { name: "Контакти", path: '/contacts', component: Contacts },

]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
