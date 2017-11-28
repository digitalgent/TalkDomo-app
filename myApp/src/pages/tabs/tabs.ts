import { Component } from '@angular/core';

import { AlarmPage } from '../alarm/alarm';
import { LightsPage } from '../lights/lights';
import { HomePage } from '../home/home';
import { SecurityPage } from '../security/security';
import { UsersPage } from '../users/users';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LightsPage;
  tab3Root = AlarmPage;
  tab4Root = SecurityPage;
  tab5Root = UsersPage;

  constructor() {

  }
}
