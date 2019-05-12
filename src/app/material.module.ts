import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatStepperModule,
  MatExpansionModule,
  MatTabsModule,
  MatListModule,
  MatCheckboxModule,
  MatChipsModule,
  MatGridListModule,
  MatBottomSheetModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatMenuModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatChipsModule,
  MatCardModule,
  MatCheckboxModule,
  MatListModule,
  MatInputModule,
  MatStepperModule,
  MatExpansionModule,
  MatTabsModule,
  MatBottomSheetModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class MaterialModule {}
