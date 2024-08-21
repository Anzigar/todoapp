import { Routes } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { TomorrowComponent } from './tomorrow/tomorrow.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {
        path: "",
        component: TodayComponent
    },
    {
        title: "Today",
        path: "today",
        component: TodayComponent
    },
    {
        title: "Tomorrow",
        path: "tomorrow",
        component: TomorrowComponent,

    },
    {
        path: "**",
        component: PagenotfoundComponent
    }
];
