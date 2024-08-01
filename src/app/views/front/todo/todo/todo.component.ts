import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/views/services/http.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  taskList: any = []
  newTask = "";
  dateNow: number = Date.now();
  status: any = false

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getAllTask();
  }

  addTasks() {
    this.http.addTask(this.newTask, this.dateNow, this.status).subscribe(() => {
      this.newTask = "";
      this.dateNow;
      this.status = ""
      this.getAllTask(); // Update the task list after adding a new task
    });
  }

  getAllTask() {
    this.http.getAllTasks().subscribe((result: any) =>
      this.taskList = result
    );
  }
}
