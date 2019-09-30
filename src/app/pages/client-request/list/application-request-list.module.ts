import { ApplicationRequestListRoutes } from './application-request-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationRequestListComponent } from './application-request-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ApplicationRequestListRoutes, ReactiveFormsModule],
  declarations: [ApplicationRequestListComponent]
})
export class ApplicationRequestListModule {}
