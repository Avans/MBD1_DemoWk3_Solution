import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CssComponentsPage } from './css-components';

@NgModule({
  declarations: [
    CssComponentsPage,
  ],
  imports: [
    IonicPageModule.forChild(CssComponentsPage),
  ],
})
export class CssComponentsPageModule {}
