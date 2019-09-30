import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'client-request', pathMatch: 'prefix' },
      {
        path: 'client-request',
        loadChildren: () =>
          import('../../pages/client-request/add/client-request.module').then(
            m => m.ClientRequestModule
          )
      }
      // {
      //   path: 'application-request-list',
      //   loadChildren: () =>
      //     import(
      //       '../../pages/client-request/list/application-request-list.module'
      //     ).then(m => m.ClientRequestListModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRouting {}
