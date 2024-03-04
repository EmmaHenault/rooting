import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

export const routes: Routes = [
	{ path: '**', component: UserProfilComponent},
	{ path: 'signup', component: SignupComponent},
	{ path: 'user', component: UserProfilComponent},
	
];

