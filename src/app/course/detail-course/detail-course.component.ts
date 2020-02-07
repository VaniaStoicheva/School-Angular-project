import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css']
})
export class DetailCourseComponent implements OnInit {

  constructor(private actvateRoute:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.actvateRoute.params)
  }

}
