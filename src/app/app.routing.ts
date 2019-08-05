import { Routes,RouterModule } from "@angular/router";
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupComponent } from './userdisplay/signup/signup.component';
import { EdituserComponent } from './userdisplay/edituser/edituser.component';
import { EditproductComponent } from './productdisplay/editproduct/editproduct.component';
import { DisplaytaskComponent } from './displaytask/displaytask.component';
import { EdittaskComponent } from './displaytask/edittask/edittask.component';
import { AddtaskComponent } from './displaytask/addtask/addtask.component';
const arr : Routes=[
  {path:'',component:ProductdisplayComponent},
  {path:'addproduct',component:ProductaddComponent},
  {path:'users',component:UserdisplayComponent},
  {path:'signup',component:SignupComponent},
  {path:'editproduct/:pro_id',component:EditproductComponent},
  {path:'edituser/:user_email',component:EdituserComponent},
  {path:'edittask/:Id',component:EdittaskComponent},
  {path:'addtask',component:AddtaskComponent},
  {path:'tasks',component:DisplaytaskComponent}

];

export const routing=RouterModule.forRoot(arr);
