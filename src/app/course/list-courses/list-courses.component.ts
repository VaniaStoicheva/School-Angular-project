import { Component, OnInit } from '@angular/core';

import { CourseService } from '../course.service';
import { ICourse } from 'src/app/shared/interfaces/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
 
  courses$:Observable<ICourse[]>;
  courses:ICourse[];
username:string;

  constructor(
    private courseService:CourseService,
   ) {
    this.username = localStorage.getItem('username');
   }

  ngOnInit() {
  // this.courses$=this.courseService.getCourses()
  
  
  }
listCourses(){
  return this.courseService.getCourses()
  /* .subscribe(courses=>{
    this.courses=courses
    console.log(courses)
  }) */
}
  
}
