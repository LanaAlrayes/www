import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // id: any
  constructor(private http: HttpClient) { }

  addTask(newTask: string, dateNow: any ,status:any) {
    return this.http.post("http://localhost:3000/tasks", {
      title: newTask,
      date: dateNow,
      finished:status
    })
  }

  getAllTasks() {
    return this.http.get("http://localhost:3000/tasks")
  }

  deleteOneTask(id: any) {
    return this.http.delete(`http://localhost:3000/tasks/${id}`)
  }

  updateTask(body: any, id: any) {
    return this.http.post(`http://localhost:3000/tasks/${id}`, body);
  }

  getCurrencydata(country1:string){
    return this.http.get( `https://api.exchangerate-api.com/v4/latest/${country1}`)
  }
}
