import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';



import { student } from 'src/app/models/students.model';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit, OnChanges {

@Input() editingStudent: student;

@Output() saveRequested = new EventEmitter<student>();

studentForm: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.initForm()
  }

  initForm(): void {
    this.studentForm=this.formBuilder.group({
      id: [this.editingStudent.id],
      fullName: [this.editingStudent.fullName, Validators.required],
      email: [this.editingStudent.email, Validators.email],
      gender: [this.editingStudent.gender],
      tz: [this.editingStudent.tz],
    });
  }


  askToSave():void{
  this.saveRequested.emit(this.studentForm.value);
  }


}
