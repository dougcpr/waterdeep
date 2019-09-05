import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

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
import { CenterLayoutComponent } from './layouts/center-layout/center-layout.component';
import { DmComponent } from './views/dashboard/dm/dm.component';
import { PlayerComponent } from './views/dashboard/player/player.component';
import { RegisterComponent } from './views/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomSheetComponent,
    CalendarComponent,
    CardDateDisplayComponent,
    CenterLayoutComponent,
    DashboardComponent,
    DragDropEncounterComponent,
    LoginComponent,
    StoryboardComponent,
    DmComponent,
    PlayerComponent,
    RegisterComponent,
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
