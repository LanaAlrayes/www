import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray } from '@angular/forms';
import { HttpService } from 'src/app/views/services/http.service';

@Component({
  selector: 'app-page-task',
  templateUrl: './page-task.component.html',
  styleUrls: ['./page-task.component.css']
})
export class PageTaskComponent {
  
  constructor(private http: HttpService) { }

  @Input() taskList: any[] = []
 
  statuse: any = false
  dataTasks={
    id:'',
    title:'',
    date:'',
    statuse:'',
  }
  deleteTask(id: any, i: number) {
    this.http.deleteOneTask(id).subscribe(() => {
      this.taskList.splice(i, 1)
    })
  }

  doneTask(f: any) {
   let data =f.value
   this.http.updateTask(this.dataTasks.id , data).subscribe((res)=>{
     console.log(res)
     let indexId = this.taskList.findIndex((obj: any) => 
        obj.id == this.dataTasks.id
      )
      this.taskList[indexId].statuse= data.statuse
      console.log(data.statuse)
   })
  }
  // doneTask(id: any, statuse: any) {
  //   this.http.updateTask(id, statuse).subscribe(() => {
  //     console.log(statuse)
  //     this.taskList[id].statuse = true;
  //   })
  // }
}
