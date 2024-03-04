import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserProfilComponent } from '../user-profil/user-profil.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, UserProfilComponent, SignupComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
