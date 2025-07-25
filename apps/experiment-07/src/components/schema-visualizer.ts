import { ChangeDetectionStrategy, Component, inject, viewChild } from '@angular/core';
import { Connection, Edge, Vflow, VflowComponent } from 'ngx-vflow';
import { FlowStoreService } from '../lib/flow-store.service';

@Component({
    selector: 'schema-visualizer',
    imports: [Vflow],
    providers: [FlowStoreService],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <main class="flex flex-1 items-stretch">
            <div class="w-full">
                <vflow
                    [background]="{ type: 'dots' }"
                    [nodes]="store.nodes()"
                    [edges]="store.edges()"
                    (onConnect)="createEdge($event)"
                    view="auto"
                >
                    <ng-template let-ctx edge>
                        @if (ctx.edge.data?.type === 'animated') {
                            <svg:path
                                class="animated-edge"
                                [attr.d]="ctx.path()"
                                [attr.stroke-width]="2"
                                [attr.stroke]="'black'"
                                [attr.marker-end]="ctx.markerEnd()"
                                fill="none"
                            />
                        }
                    </ng-template>

                    <ng-template let-ctx edgeLabelHtml>
                        @if (ctx.label.data.type === 'text') {
                            <div class="label-text">{{ ctx.label.data.text }}</div>
                        }

                        @if (ctx.label.data.type === 'delete') {
                            <div class="label-delete" (click)="deleteEdge(ctx.edge)">×</div>
                        }
                    </ng-template>
                    <mini-map />
                </vflow>
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

            .label-text {
                height: 25px;
                background-color: #122c26;
                color: white;
                border-radius: 5px;
                text-align: center;
                padding-left: 5px;
                padding-right: 5px;
            }

            .label-delete {
                width: 25px;
                height: 25px;
                background-color: rgb(177, 177, 183);
                border-radius: 5px;
                text-align: center;
                padding-left: 5px;
                padding-right: 5px;
            }

            .animated-edge {
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-dasharray: 10; /* Matches the length of the path */
                stroke-dashoffset: 200; /* Initially offset */
                animation: move-white-stroke 4s linear infinite;
            }

            @keyframes move-white-stroke {
                to {
                    stroke-dashoffset: 0; /* Move the stroke along the path */
                }
            }
        `

    ]
})
export class SchemaVisualizer {
    protected readonly store = inject(FlowStoreService);

    protected readonly vflow = viewChild.required(VflowComponent);

    ngAfterViewInit(): void {
        this.vflow().viewportTo({ x: 0, y: 322, zoom: 0.5 });
    }

    createEdge(connection: Connection) {
        const id = `${connection.source}${connection.sourceHandle ?? ''}-${connection.target}${connection.targetHandle ?? ''}`;

        this.store.edges.update((edges) => {
            return [
                ...edges,
                {
                    id,
                    edgeLabels: {
                        center: {
                            type: 'html-template',
                            data: {
                                type: 'delete'
                            }
                        }
                    },
                    ...connection
                }
            ];
        });
    }

    deleteEdge(edgeToDelete: Edge) {
        this.store.edges.update((edges) => {
            return edges.filter((edge) => edge !== edgeToDelete);
        });
    }
}
