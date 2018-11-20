import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterEvent } from '@angular/router';

// 引入模板
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

/**
 * 1、path：一个用于匹配浏览器地址栏中 URL 的字符串。
 * 2、component：当导航到此路由时，路由器应该创建哪个组件。
 */
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];
@NgModule({
  exports:[
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
