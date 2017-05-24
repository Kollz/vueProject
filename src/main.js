// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue 			from 'vue'
import App 			from './App'
import Home 		from './components/Home'
import TimeEntries 	from './components/TimeEntries'
import Inscription 	from './components/Inscription'
import VisuAnnonce	from './components/VisuAnnonce'
import AddAnnonce	from './components/AddAnnonce'
import Annuaire		from './components/Annuaire'
import Profile		from './components/Profile'
import LogTime 		from './components/LogTime'

import VueRouter 	from 'vue-router'
import VueResource 	from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{ path: '/', component: Home},
		{ path: '/home', component: Home},
		{ path: '/inscription', component: Inscription},
		{ path: '/visuAnnonce', component: VisuAnnonce},
		{ path: '/addAnnonce', component: AddAnnonce},
		{ path: '/annuaire', component: Annuaire},
		{ path: '/profile', component: Profile},
		{ path: '/time-entries', component: TimeEntries,
			children: [
				{
					path: 'log-time',
					component: LogTime
				}
			]
		},
		{ path: '*', redirect: '/home'}
	],
	mode: 'history' 
})

var bus = new Vue({});

/* eslint-disable no-new */
const app = new Vue({
	router,
	data: {
		bus: bus
	},
	render: h => h(App)
}).$mount('#app')
