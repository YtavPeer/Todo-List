import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { student } from 'src/app/models/students.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  
@Input() title ='';
@Input() students: student[]=[];

selectedStudent: student;

@Output() selectedChange= new EventEmitter<student>();

setSelectedStudent(student: student):void {
this.selectedStudent=student;
this.selectedChange.emit(this.selectedStudent);
}

 ngOnInit(): void {

  }

}
