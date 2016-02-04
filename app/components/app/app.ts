import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


import {HomeComponent} from '../home/home';
import {LoginComponent} from '../login/login';

@Component({
    selector: 'my-app',
    template: `
	  <nav>
	    <a [routerLink]="['Home']">Home</a>
	    <a [routerLink]="['Login']">Login</a>
	  </nav>
	  <br/>
    <router-outlet></router-outlet>
    `,
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
		{ path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
		{ path: '/login', name: 'Login', component: LoginComponent}
])

export class AppComponent {
}
