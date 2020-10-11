import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './components/student-list/student-list.component';
import { RouterModule } from '@angular/router';
import { StudentsHomeComponent } from './components/students-home/students-home.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [StudentListComponent, StudentsHomeComponent, StudentEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
      RouterModule.forChild([
        {path: '',component: StudentsHomeComponent}
      ])
  ]
})
export class StudentsModule { }
