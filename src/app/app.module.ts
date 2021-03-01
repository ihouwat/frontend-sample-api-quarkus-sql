import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom component
import { ListItemComponent } from './list/list-item/list-item.component';
// carbon-components-angular default imports
import { ButtonModule, InputModule } from 'carbon-components-angular';
import { TrashCanModule, EditModule } from '@carbon/icons-angular';


@NgModule({
	declarations: [
		AppComponent,
		ListItemComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ButtonModule,
		TrashCanModule,
		EditModule,
		InputModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
