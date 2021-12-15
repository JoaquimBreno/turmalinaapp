import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TurmalinaRoutingModule } from './turmalina-routing.module';
import { TurmalinaComponent } from './turmalina.component';
import { MapleafComponent } from './mapleaf/mapleaf.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    TurmalinaComponent,
    MapleafComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    TurmalinaRoutingModule
  ],
  bootstrap: [TurmalinaComponent],
  providers: []
})
export class TurmalinaModule { }
