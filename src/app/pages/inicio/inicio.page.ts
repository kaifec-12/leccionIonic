import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'Beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'Radio-button-on',
      name: 'Botones y router',
      redirectTo: '/button'
    },
  ];
  constructor() { }
  ngOnInit() {
  }

}
