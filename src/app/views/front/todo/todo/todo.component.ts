import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/views/services/http.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  newTask = "";
  taskList: any = []
  dateNow: number = Date.now();

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getAllTask();
  }

  addTasks() {
    // console.log("addTask", this.newTask);
    this.http.addTask(this.newTask, this.dateNow).subscribe(() => {
      this.newTask = "";
      this.dateNow;
      this.getAllTask(); // Update the task list after adding a new task
    });
  }

  getAllTask() {
    this.http.getAllTasks().subscribe((result: any) =>
      this.taskList = result
    );
  }
  onComplete(task: any) {
    task.completed = true
    console.log("Complete", task)
  }

}
