import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
const routes: Routes = [
  {
    path: '', component: FrontLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./views/front/todo/todo.module').then(m => m.TodoModule) },
      { path: 'currency', loadChildren: () => import('./views/front/currency/currency.module').then(m => m.CurrencyModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
