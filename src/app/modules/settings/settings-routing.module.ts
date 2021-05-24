import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSettingsComponent } from './components/list-settings/list-settings.component';

const routes: Routes = [
  {
    path: '', component: ListSettingsComponent, pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
