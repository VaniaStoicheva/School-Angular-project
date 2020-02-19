import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css']
})
export class DetailCourseComponent implements OnInit {

  public course;

  constructor(private actvateRoute:ActivatedRoute,
    private courseService:CourseService,
    ) { }

  ngOnInit() {
    
    this.courseService.getById(this.actvateRoute.snapshot.params['id'])
    .subscribe(data=>{
      this.course=data
      
    }) 
  }

}
