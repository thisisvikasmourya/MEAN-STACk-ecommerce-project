import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { MaterialSharedModule } from 'src/app/material-shared/material-shared.module';
import { MatFormField} from '@angular/material/form-field'
import { FormGroup,FormsModule,ReactiveFormsModule} from '@angular/forms'
import { MatInput } from '@angular/material/input';

@NgModule({
  declarations: [ProfileEditComponent],
  imports: [
    CommonModule,
    MaterialSharedModule,
    MatFormField,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    MatInput
,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class ProfileModule { }
