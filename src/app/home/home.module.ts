import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { ComponentsModule } from '../components/components.module';
import { AgmCoreModule } from '@agm/core';
import { AboutComponent } from './about/about.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ComponentsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDySdsZG3tJO4FJqgu24ujKy8kIdlexmsE'
          })
    ],
    declarations: [ HomeComponent, AboutComponent ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
