import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { NewCompnayComponent } from './new-compnay/new-compnay.component';

const routes: Routes = [
  {path:'',redirectTo:'company-list',pathMatch:'full'},
  {path:'company-list',component:CompanyListComponent},
  {path:'add-company',component:NewCompnayComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
