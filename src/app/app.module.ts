import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { ClientComponent } from './input-binding/client/client.component';
import { EventComponent } from './event/event.component';
import { MatCardModule } from '@angular/material/card';
import { ChildItemComponent } from './event/child-item/child-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ClientsComponent } from './clients/clients.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ItemClientComponent } from './clients/item-client/item-client.component';
import { ParentChildComponent } from './parent-clild/parent-child.component';
import { TimerComponent } from './parent-clild/timer/timer.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    ClientComponent,
    EventComponent,
    ChildItemComponent,
    ClientsComponent,
    ItemClientComponent,
    ParentChildComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
