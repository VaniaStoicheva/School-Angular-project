import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateCourseComponent} from './create-course/create-course.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { CourseRoutingModule } from './course-routin.module';




@NgModule({
  declarations: [
    CreateCourseComponent, 
    DetailCourseComponent,
    ListCoursesComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ],
 exports:[ListCoursesComponent]
})
export class CourseModule { }
