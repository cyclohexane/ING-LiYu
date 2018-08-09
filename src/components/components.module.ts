import { NgModule } from '@angular/core';
import { ProjectPreviewComponent } from './project-preview/project-preview';
import { ProLabelComponent } from './pro-label/pro-label';

@NgModule({
	declarations: [ProjectPreviewComponent,
    ProLabelComponent,
	],
	imports: [],
	exports: [ProjectPreviewComponent,
    ProLabelComponent,
	]
})
export class ComponentsModule { }
