import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MainComponent } from '../arnese/main';
import { ContentComponent } from '../arnese/content/content';
import { ItemsComponent } from '../arnese/content/items/items';
import { ItemComponent } from '../arnese/content/items/item/item';

@NgModule({
    declarations: [
        AppComponent, MainComponent, ContentComponent, ItemsComponent, ItemComponent
    ],
    imports: [
        BrowserModule, FormsModule, HttpModule, BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
