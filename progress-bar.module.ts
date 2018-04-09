import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { ProgressBarComponent } from './progress-bar.component'

@NgModule({
    imports: [
        FormsModule
    ],
    declarations: [
        ProgressBarComponent
    ],
    exports: [
        ProgressBarComponent
    ]
})

export class ProgressBarModule { }