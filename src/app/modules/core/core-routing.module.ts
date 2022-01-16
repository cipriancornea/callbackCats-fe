import {LoginComponent} from "./pages/login-page/login-page.component";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignUpPageComponent} from "./pages/sign-up-page/sign-up-page.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {

}
