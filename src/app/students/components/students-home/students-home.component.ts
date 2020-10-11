import { Component, OnInit, Output } from '@angular/core';
import { StudentsService } from 'src/app/core/services/students.service';
import { student } from 'src/app/models/students.model';

@Component({
  selector: 'app-students-home',
  templateUrl: './students-home.component.html',
  styleUrls: ['./students-home.component.scss']
})
export class StudentsHomeComponent implements OnInit {

  maleStudents: student[];
  femaleStudents: student[];

  currentStudent: student;

 onSelectedChange(student:student): void{
this.currentStudent=student;
  }


  async onSaveRequested(student: student) {
  await this.studentService.update(student);
  this.refresh();
  }

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
  this.refresh();
  }

  refresh(){
    this.studentService.getAllStudent().subscribe(list =>{
      this.maleStudents=list.filter(x => x.gender==='M')
      this.femaleStudents=list.filter(x => x.gender==='F')
    })
  }

}
