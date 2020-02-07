import { Injectable } from '@angular/core';
import { ICourse } from './shared/interfaces/course';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICause } from './shared/interfaces/cause';

const appKey = "kid_r1cvWi9zI" 
const appSecret = "ac02ed802c4b49b88056a139aef774cb" 
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const addBookUrl = `https://baas.kinvey.com/user/${appKey}/addBooks`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  courses:ICourse[];


  constructor(private http:HttpClient) { }
  addBook(book:BookModel): Observable<Object> {
    const body = JSON.stringify(book);
    return this.http.post(`https://baas.kinvey.com/appdata/${appKey}/books`, body, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'))
        .set('Content-Type', 'application/json')
    });
  }

  createCourse(course:ICourse) {
    const body = JSON.stringify(course);
    return this.http.post(`https://baas.kinvey.com/appdata/${appKey}/course/create`, body, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'))
        .set('Content-Type', 'application/json')
    });
  }

   /* loadCourse(id?:number){
    this.http.get<ICause[]>(`http://localhost:3000/causes${id?`/($id}`:'')`).subscribe(causes=>{
    this.courses=causes;
    })
   } */
}