import { RouterModule, Routes } from '@angular/router';
import { CreateCourseComponent } from './create-course/create-course.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';


const routes: Routes = [
  {
    path: 'course',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component:ListCoursesComponent
      },
      {
        path: 'create',
        component: CreateCourseComponent,
       
      },
      {
        path: 'list',
        component: ListCoursesComponent,
       
      },
      {
        path: 'detail',
        component: DetailCourseComponent,
        
      }
    ]
  }
];

export const CourseRoutingModule = RouterModule.forChild(routes);
