import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-task',
  templateUrl: './page-task.component.html',
  styleUrls: ['./page-task.component.css']
})
export class PageTaskComponent {

  @Input() taskList: any[] = []
  @Output()  complete = new EventEmitter<any>()

  markComplete(task: any) {
    this.complete.emit(task)
  }
}
