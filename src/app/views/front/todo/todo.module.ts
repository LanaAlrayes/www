import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { PageTaskComponent } from './page-task/page-task.component';


@NgModule({
  declarations: [
    TodoComponent,
    PageTaskComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule
  ]
})
export class TodoModule { }
