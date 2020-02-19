import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICourse } from '../shared/interfaces/course';


const appKey = "kid_r1cvWi9zI" 
const appSecret = "ac02ed802c4b49b88056a139aef774cb" 
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const createCourse = `https://baas.kinvey.com/courses/${appKey}/courses`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  course:ICourse;

  courses:ICourse[];


  constructor(private http:HttpClient) { }

 
  createCourse(course:ICourse) {
    const body = JSON.stringify(course);
    
    return this.http.post(`https://baas.kinvey.com/appdata/${appKey}/courses`, body, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'))
        .set('Content-Type', 'application/json')
    });
  }

   getAllCourses(){
    return this.http.get(`https://baas.kinvey.com/appdata/${appKey}/courses`, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'))
        .set('Content-Type', 'application/json')
    });
  }

  getById(id : number)  {
    return this.http.get(`https://baas.kinvey.com/appdata/${appKey}/courses/`+id, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'))
        .set('Content-Type', 'application/json')
    });
  } 
}
