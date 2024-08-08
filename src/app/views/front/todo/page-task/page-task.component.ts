import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray } from '@angular/forms';
import { HttpService } from 'src/app/views/services/http.service';

@Component({
  selector: 'app-page-task',
  templateUrl: './page-task.component.html',
  styleUrls: ['./page-task.component.css'],
})
export class PageTaskComponent {
  constructor(private http: HttpService) {}

  @Input() taskList: any[] = [];

  finished: any = false;
  maxTasks = 5;

  deleteTask(id: any, i: number) {
    this.http.deleteOneTask(id).subscribe(() => {
      this.taskList.splice(i, 1);
    });
  }

  doneTask(title: any) {
    title.finished = true;
    this.taskList = this.taskList
      .filter((t) => !t.finished)
      .concat(this.taskList.filter((t) => t.finished));
      // console.log(this.finished)
      if (this.taskList.length > this.maxTasks) {
        this.taskList.splice(this.maxTasks);
      }
  }
}
