import { NgModule } from '@angular/core';
import { ProPreviewComponent } from './pro-preview/pro-preview';
import { ProgressBarComponent } from './progress-bar/progress-bar';

@NgModule({
	declarations: [ProPreviewComponent,
    ProgressBarComponent,
	],
	imports: [],
	exports: [ProPreviewComponent,
    ProgressBarComponent,
	]
})
export class ComponentsModule { }
