import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  addTask(task: string, timenow: any) {
    return this.http.post("http://localhost:3000/tasks", {
      title: task,
      date: timenow
    })
  }

  getAllTasks() {
    return this.http.get("http://localhost:3000/tasks")
  }

  updateTask(task: string, timenow: any){
    return this.http.post("http://localhost:3000/tasks", {
      title: task,
      date: timenow
    })
  }
}
