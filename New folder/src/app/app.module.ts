import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreatenoteComponent } from './component/createnote/createnote.component';
import { DisplaynotesComponent } from './component/displaynotes/displaynotes.component';
import { GetallnotesComponent } from './component/getallnotes/getallnotes.component';
import { IconsComponent } from './component/icons/icons.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AuthguardServiceService } from './Services/AuthGuard/authguard-service.service';
import { UpdatenoteComponent } from './component/updatenote/updatenote.component';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { TrashnotesComponent } from './component/trashnotes/trashnotes.component';
import { ArchivenotesComponent } from './component/archivenotes/archivenotes.component'; 
import { CreatelabelComponent } from './component/createlabel/createlabel.component';
import { SearchPipe } from './component/search.pipe';

 
 


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    CreatenoteComponent,
    DisplaynotesComponent,
    GetallnotesComponent,
    IconsComponent,
    UpdatenoteComponent,
    TrashnotesComponent,
    ArchivenotesComponent,
    CreatelabelComponent,
    SearchPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule, MatIconModule,
    FlexLayoutModule, FormsModule, ReactiveFormsModule,
    FlexLayoutModule, MatCardModule, MatCheckboxModule,
    MatButtonModule, HttpClientModule, MatSidenavModule, MatListModule,
    MatToolbarModule,MatGridListModule,MatDialogModule,MatMenuModule

  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent],
  entryComponents:[UpdatenoteComponent]
  

})
export class AppModule {

}

