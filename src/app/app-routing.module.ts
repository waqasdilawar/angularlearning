import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FetchDataComponent } from './Components/fetchdata/fetchdata.component';
import { PolicyFormComponent } from './Components/policyforms/policyform.component';

const routes: Routes = [ 

{ path: 'fetch-data', component: FetchDataComponent },
{path:'policy-form',component:PolicyFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
