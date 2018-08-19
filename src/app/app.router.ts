import {Routes } from '@angular/router';
import {PersonalComponent} from './personal/personal.component';
import {ReviewComponent} from './review/review.component';
import {AcknowledgementComponent} from './acknowledgement/acknowledgement.component';


export const AppRoutes: Routes = [
    {   path: '', 
        component: PersonalComponent },
    {   path: 'review', 
        component: ReviewComponent },
    {
        path: 'acknowledgement',
        component: AcknowledgementComponent,
    }
];