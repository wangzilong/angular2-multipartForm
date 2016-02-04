import {Component} from 'angular2/core';

import {RouteParams, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {NgForm}    from 'angular2/common';
import {User} from './user';

@Component({
	selector: 'login',
	templateUrl: 'app/components/login/login.html'
})
export class LoginComponent {

	user = new User('111','222');

	constructor(public router: Router) {
	}

	submitted = false;

	onSubmit() { this.submitted = true; }

	login(event, name, password) {
		console.log("login name: " + name);
		console.log("login password: " + password);
	}

	get diagnostic() { 
		return JSON.stringify(this.user); 
	}
}

