import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { student } from 'src/app/models/students.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

serverUrl= environment.serverUrl;  

getAllStudent(): Observable<student[]> {
return this.httpclients.get<student[]>(`${this.serverUrl}/students`);
}

getStudentById(id: number){

}

update(student: student): Promise<student> {
  return this.httpclients.put<student>(`${this.serverUrl}/students/${student.id}`, student).toPromise();
}



  constructor(private httpclients:HttpClient) { }
}
