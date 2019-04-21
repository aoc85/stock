import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { IndexComponent } from "./content/index/index.component";
import { LoginComponent } from "./content/login/login.component";
import { InfoComponent } from "./content/info/info.component";
const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "home", component: IndexComponent },
    { path: "info", component: InfoComponent }
]
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
