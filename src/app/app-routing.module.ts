import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsModule } from './students/students.module';

const routes: Routes = [

  {path: 'students', loadChildren: () => import('./students/students.module').then(x => x.StudentsModule)},
  {path: '',pathMatch: 'full',redirectTo: 'students'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
