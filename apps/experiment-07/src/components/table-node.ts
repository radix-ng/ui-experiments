import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { EllipsisVertical, LucideAngularModule } from 'lucide-angular';
import { CustomNodeComponent, HandleComponent } from 'ngx-vflow';

export interface TableField {
    name: string;
    type: string;
    isPrimary?: boolean;
    isForeign?: boolean;
}

export interface TableNodeData {
    label: string;
    fields: TableField[];
    selected?: boolean;
}

@Component({
    selector: 'table-node',
    imports: [
        HandleComponent,
        OriButton,
        LucideAngularModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div
            class="bg-card w-66 rounded-xl font-mono shadow-[0_1px_1px_rgba(0,0,0,0.02),_0_2px_2px_rgba(0,0,0,0.02),_0_4px_4px_rgba(0,0,0,0.02),_0_8px_8px_rgba(0,0,0,0.02),_0_16px_16px_rgba(0,0,0,0.02),_0_32px_32px_rgba(0,0,0,0.02)]"
        >
            <div
                class="border-border/80 from-background/70 dark:from-background/30 flex items-center justify-between border-b bg-gradient-to-t px-4 py-3"
            >
                <div class="text-[13px]">
                    <span class="text-muted-foreground/80">/</span>
                    {{ ' ' }}
                    <span class="font-medium">{{ data()?.label }}</span>
                </div>
                <button
                    class="text-muted-foreground/60 hover:text-muted-foreground -my-2 -me-2 shadow-none hover:bg-transparent"
                    oriButton
                    size="icon"
                    variant="ghost"
                    aria-label="Open edit menu"
                >
                    <lucide-angular [img]="EllipsisVertical" />
                </button>
            </div>
            <div class="py-2 text-xs">
                @for (field of data()?.fields; track $index) {
                    <div class="group relative px-4">
                        <div class="flex items-center justify-between gap-2 border-dashed py-2 group-not-last:border-b">
                            <span class="truncate font-medium">{{ field.name }}</span>
                            <span class="text-muted-foreground/60">{{ field.type }}</span>
                        </div>
                    </div>
                }
            </div>

            <handle type="source" position="left" />
            <handle type="target" position="right" />
        </div>
    `
})
export class TableNode extends CustomNodeComponent<TableNodeData> {
    protected readonly EllipsisVertical = EllipsisVertical;
}
