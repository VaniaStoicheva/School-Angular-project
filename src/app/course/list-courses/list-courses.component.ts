import { Component, OnInit } from '@angular/core';

import { CourseService } from '../course.service';
import { ICourse } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  constructor(private courseService:CourseService) { }

  ngOnInit() {
  }
listCourses(courses:ICourse[]){
  console.log(this.courseService.getCourse())
  /* .subscribe(data=>{
    console.log(data)
  }) */
}
}
