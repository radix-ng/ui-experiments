import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CustomDynamicNodeComponent, Vflow } from 'ngx-vflow';
import { FlowStoreService } from '../lib/flow-store.service';

@Component({
    standalone: true,
    template: `
        <div>
            X: {{ connectedNodeX() }}

            <handle id="x" position="left" type="target" />
        </div>

        <div class="bottom-label">
            Y: {{ connectedNodeY() }}

            <handle id="y" position="left" type="target" />
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                width: 150px;
                height: 100px;
                padding: 10px;
                border: 1.5px solid #1b262c;
                border-radius: 5px;
                color: black;
                background-color: white;
            }

            .bottom-label {
                margin-top: 25px;
            }
        `

    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [Vflow]
})
export class PositionNodeComponent extends CustomDynamicNodeComponent {
    public store = inject(FlowStoreService);

    public connectedNodeX = computed(() => {
        const edge =
            this.store.edges().find((edge) => edge.target === this.node().id && edge.targetHandle === 'x') ?? null;
        const sourceNode = edge ? this.store.nodes().find((node) => node.id === edge?.source) : null;

        return Math.floor(sourceNode?.point().x ?? 0);
    });

    public connectedNodeY = computed(() => {
        const edge =
            this.store.edges().find((edge) => edge.target === this.node().id && edge.targetHandle === 'y') ?? null;
        const sourceNode = edge ? this.store.nodes().find((node) => node.id === edge?.source) : null;

        return Math.floor(sourceNode?.point().y ?? 0);
    });
}
