import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
// @ts-ignore
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { DragDropEncounterComponent } from './components/drag-drop-encounter/drag-drop-encounter.component';
import { StoryboardComponent } from './components/storyboard/storyboard.component';
import { BottomSheetComponent, CalendarComponent } from './components/calendar/calendar.component';
import { CardDateDisplayComponent } from './components/card-date-display/card-date-display.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropEncounterComponent,
    StoryboardComponent,
    CalendarComponent,
    BottomSheetComponent,
    CardDateDisplayComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DragDropModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  entryComponents: [BottomSheetComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
