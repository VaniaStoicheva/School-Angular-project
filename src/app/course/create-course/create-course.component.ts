import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course.service';
import { ICourse } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  constructor(
    private courseService: CourseService
  ) { }

  course:ICourse;

  
    
  /* createCourse(){
    this.courseService.createCourse(this.course)
    .subscribe(data=>{
        console.log(data);
        //this.('Product added.');
      //this.router.navigate(['/']);
    })
  } */

  ngOnInit() {
  }

}