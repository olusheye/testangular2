import { ClientRequestRoutingRoutes } from './client-request-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ClientRequestComponent } from './client-request.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRequestRoutingRoutes,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ClientRequestComponent]
})
export class ClientRequestModule {}
