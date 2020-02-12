import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/shared/interfaces/course';
import { CourseService } from '../course.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css','../../../error-styles.scss']
})
export class CreateCourseComponent implements OnInit {

  constructor(
    private courseService: CourseService
  ) { }

  course:ICourse;

  
    
  handleCreate(course:ICourse){
   
    this.courseService.createCourse(course)
    .subscribe(data=>{
        console.log(data);
        //this.('Product added.');
      //this.router.navigate(['/']);
    })
  } 

  ngOnInit() {
  }

}
