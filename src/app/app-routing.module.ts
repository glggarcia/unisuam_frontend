import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './indication/list/list.component';
import { CreateComponent } from './indication/create/create.component';

const routes: Routes = [
  { path: '', component: ListComponent},
  { path: 'indication/create', component: CreateComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
