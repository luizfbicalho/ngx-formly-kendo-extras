import { NgModule } from '@angular/core';



import { FormlyGridModule } from '@luizfbicalho/ngx-formly-kendo-extras/grid';
import { FormlyTreeGridModule } from '@luizfbicalho/ngx-formly-kendo-extras/treegrid';
import { FormlyComboBoxModule } from '@luizfbicalho/ngx-formly-kendo-extras/combobox';
import { FormlyHtmlEditorModule } from '@luizfbicalho/ngx-formly-kendo-extras/htmleditor';
import { FormlyMultiSelectModule } from '@luizfbicalho/ngx-formly-kendo-extras/multiselect';

@NgModule({
  imports: [
    FormlyGridModule,
    FormlyTreeGridModule,
    FormlyComboBoxModule,
    FormlyHtmlEditorModule,
    FormlyMultiSelectModule
  ],
})
export class FormlyKendoExtrasModule {}
