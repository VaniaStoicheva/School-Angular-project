import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username:string;
  public courses;

  constructor(
    private courseService:CourseService,
  ) { }

  ngOnInit() {
    this.courseService.getAllCourses()
    .subscribe(coursArr=>{
      this.courses=coursArr;
     })
  }

}
