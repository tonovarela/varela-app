import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet,SideMenuComponent],
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
