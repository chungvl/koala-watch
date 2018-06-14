import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CensusPage } from './census';
import { ComponentsModule } from "../../components/components.module";
import { CensusObservationModule } from "./census-observation/census-observation.module";
import { ObservationPageModule } from "../observation/observation.module";

@NgModule({
    declarations: [
        CensusPage,
    ],
    imports: [
        IonicPageModule.forChild(CensusPage),
        ComponentsModule,
        ObservationPageModule,
        CensusObservationModule,
    ],
    entryComponents: [
        CensusPage
    ]
})
export class CensusPageModule {}
