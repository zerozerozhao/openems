import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ChartsModule } from 'ng2-charts';
import { NgxSpinnerModule } from "ngx-spinner";
import { appRoutingProviders } from './../app-routing.module';
import { ChartOptionsComponent } from './chartoptions/chartoptions.component';
import { FormlyWrapperFormField } from './formly/form-field.wrapper';
import { FormlySelectFieldWrapper } from './formly/formly-select-field.wrapper';
import { InputTypeComponent } from './formly/input';
import { FormlyInputSerialNumberWrapper as FormlyWrapperInputSerialNumber } from './formly/input-serial-number-wrapper';
import { RepeatTypeComponent } from './formly/repeat';
import { Generic_ComponentsModule } from './genericComponents/genericComponents';
import { HeaderComponent } from './header/header.component';
import { PercentageBarComponent } from './percentagebar/percentagebar.component';
import { PipeModule } from './pipe/pipe';
import { Logger } from './service/logger';
import { Service } from './service/service';
import { Utils } from './service/utils';
import { Websocket } from './service/websocket';
import { Language } from './translate/language';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    NgxSpinnerModule.forRoot({
      type: 'ball-clip-rotate-multiple'
    }),
    ReactiveFormsModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: Language }
    }),
    FormlyModule.forRoot({
      wrappers: [
        { name: 'form-field', component: FormlyWrapperFormField },
        { name: "input-serial-number", component: FormlyWrapperInputSerialNumber },
        { name: 'formly-select-field-wrapper', component: FormlySelectFieldWrapper }
      ],
      types: [
        { name: 'input', component: InputTypeComponent },
        { name: 'repeat', component: RepeatTypeComponent },
      ],
    }),
    PipeModule,
    Generic_ComponentsModule
  ],
  declarations: [
    // components
    ChartOptionsComponent,
    HeaderComponent,
    PercentageBarComponent,
    // formly
    InputTypeComponent,
    FormlyWrapperFormField,
    RepeatTypeComponent,
    FormlyWrapperInputSerialNumber,
    FormlySelectFieldWrapper
  ],
  exports: [
    // modules
    BrowserAnimationsModule,
    ChartsModule,
    CommonModule,
    FormlyIonicModule,
    FormlyModule,
    FormsModule,
    IonicModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    PipeModule,
    Generic_ComponentsModule,
    // components
    ChartOptionsComponent,
    HeaderComponent,
    PercentageBarComponent,
  ],
  providers: [
    appRoutingProviders,
    Service,
    Utils,
    Websocket,
    Logger
  ]
})

export class SharedModule { }
