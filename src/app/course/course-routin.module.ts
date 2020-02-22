import { RouterModule, Routes } from '@angular/router';
import { CreateCourseComponent } from './create-course/create-course.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  {
    path: 'course',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component:ListCoursesComponent,
        
      },
      {
        path: 'create',
        component: CreateCourseComponent,
        // canActivate :[AuthGuard],
        data:{
          isLogged:true
        } 
      },
      {
        path: 'list',
        component: ListCoursesComponent,
        data:{
          isLogged:true
        } 
      },
      {
        path: 'detail/:id',
        component: DetailCourseComponent,
         //canActivate :[AuthGuard],
        data:{
          isLogged:true
        } 
      }
    ]
  }
];

export const CourseRoutingModule = RouterModule.forChild(routes);
