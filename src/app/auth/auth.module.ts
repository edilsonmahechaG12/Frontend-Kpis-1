import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { LoginRoutingModule } from "./auth-routing.module";
import { CommonModule } from "@angular/common";
import { RecoverPasswordComponent } from "./recoverPassword/recover-password.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";

@NgModule({
    declarations: [
        LoginComponent,
        RecoverPasswordComponent,
        AuthComponent
    ],
    imports: [
        LoginRoutingModule,
        CommonModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [
        BrowserModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }