import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VarelaSidemenuComponent} from 'varela-sidemenu'

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, VarelaSidemenuComponent],  
templateUrl: './admin-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export  default class AdminLayoutComponent { 
  isAuthenticated = signal(true)


  onLogin() {
    this.isAuthenticated = signal(true)
  }

  onLogout() {
    this.isAuthenticated = signal(false)
  } 
}
