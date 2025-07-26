import { Component, inject } from '@angular/core';
import { Vflow } from 'ngx-vflow';
import { FlowStoreService } from '../lib/flow-store.service';

@Component({
    selector: 'schema-visualizer',
    imports: [Vflow],
    providers: [FlowStoreService],

    template: `
        <main class="flex flex-1 items-stretch">
            <div class="w-full">
                <vflow [background]="{ type: 'dots' }" [edges]="store.edges" [nodes]="store.nodes" view="auto" />
            </div>
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex: 1;
                align-items: stretch;
            }
        `

    ]
})
export class SchemaVisualizer {
    protected readonly store = inject(FlowStoreService);
}
