import { Component, signal } from '@angular/core';
import {
    OriBreadcrumbDirective,
    OriBreadcrumbItemDirective,
    OriBreadcrumbLinkDirective,
    OriBreadcrumbListDirective,
    OriBreadcrumbSeparatorComponent
} from '@origin-ui/components/breadcrumb';
import {
    OriDropdownMenuContent,
    OriDropdownMenuItem,
    OriDropdownMenuTrigger
} from '@origin-ui/components/dropdown-menu';
import { ChevronDownIcon, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'template-switcher',
    imports: [
        OriBreadcrumbDirective,
        OriBreadcrumbListDirective,
        OriBreadcrumbItemDirective,
        OriBreadcrumbLinkDirective,
        OriBreadcrumbSeparatorComponent,
        OriDropdownMenuTrigger,
        OriDropdownMenuContent,
        OriDropdownMenuItem,
        LucideAngularModule
    ],
    template: `
        <nav oriBreadcrumb>
            <ol oriBreadcrumbList>
                <li class="max-sm:hidden" oriBreadcrumbItem>
                    <a oriBreadcrumbLink href="#">Templates</a>
                </li>
                <li class="text-border max-sm:hidden" oriBreadcrumbSeparator>
                    {{ ' ' }}
                    <span>/</span>
                    {{ ' ' }}
                </li>
                <li oriBreadcrumbItem>
                    <button
                        class="text-foreground flex items-center gap-1 font-medium"
                        [oriDropdownMenuTrigger]="menuContent"
                        [sideOffset]="10"
                    >
                        {{ activeTemplate()?.name ?? 'Select Template' }}

                        <lucide-angular class="-me-1 opacity-60" [img]="ChevronDownIcon" size="16" aria-hidden="true" />
                    </button>

                    <ng-template #menuContent>
                        <div oriDropdownMenuContent sideOffset="10">
                            @for (template of templates; track $index) {
                                <div (click)="activeTemplate.set(template)" oriDropdownMenuItem>
                                    {{ template.name }}
                                </div>
                            }
                        </div>
                    </ng-template>
                </li>
            </ol>
        </nav>
    `
})
export class TemplateSwitcher {
    protected readonly ChevronDownIcon = ChevronDownIcon;

    readonly templates = [
        {
            name: 'Schema-Visualizer',
            href: '/templates/schema-visualizer'
        },
        {
            name: 'Component-Explorer',
            href: '/templates/component-explorer'
        },
        {
            name: 'Dashboard-Builder',
            href: '/templates/dashboard-builder'
        },
        {
            name: 'Form-Generator',
            href: '/templates/form-generator'
        }
    ];

    readonly activeTemplate = signal<{ name: string; href: string } | null>(this.templates[0] ?? null);
}
