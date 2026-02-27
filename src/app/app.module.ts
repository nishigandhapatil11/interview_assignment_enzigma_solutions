import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './features/tasks/components/task-list/task-list.component';
import { TaskFormComponent } from './features/tasks/components/task-form/task-form.component';

// Angular Material modules
// Angular Material modules removed — not used in templates

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    // (no extra UI modules required)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
