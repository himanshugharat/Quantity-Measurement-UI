import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LengthComponent } from './length/length.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { VolumeComponent } from './volume/volume.component';

const routes: Routes = [
  {path:'length',component:LengthComponent},
  {path:'temperature',component:TemperatureComponent},
  {path:'volume',component:VolumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LengthComponent,TemperatureComponent,VolumeComponent]