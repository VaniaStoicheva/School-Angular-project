import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListCoursesComponent } from './course/list-courses/list-courses.component';

const routes:Routes=[
    {
        path:'',
        pathMatch:'full',
        component:ListCoursesComponent,
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'**',
        component:NotFoundComponent
    }
]

export const AppRoutingModule=RouterModule.forRoot(routes);