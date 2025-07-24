import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { Participants } from './participants';
import { TemplateSwitcher } from './template-switcher';

@Component({
    selector: 'app-header',
    imports: [
        OriButton,
        TemplateSwitcher,
        Participants
    ],
    template: `
        <header class="fixed top-2 z-50 w-full px-2 md:top-5 md:px-5">
            <div
                class="border-border/80 bg-card/80 flex h-12 items-center justify-between gap-2 rounded-xl border px-4 shadow-lg/2 backdrop-blur-md md:h-16"
            >
                <!--        /* Left area */-->
                <div class="flex flex-1 items-center">
                    <a class="inline-flex" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" aria-label="Schema Visualizer">
                            <path
                                fill="currentColor"
                                d="M0 12v12.8h4.028a3.242 3.242 0 0 1 2.278.937A3.199 3.199 0 0 1 7.25 28v4h9.667L29 20V7.2h-4.028a3.242 3.242 0 0 1-2.278-.937A3.2 3.2 0 0 1 21.75 4V0h-9.667L0 12Zm13.694 12H8.056v-8.8l7.25-7.2h5.638v8.8l-7.25 7.2Z"
                            />
                        </svg>
                    </a>
                </div>
                <!--        /* Center area */-->
                <div class="flex grow justify-center">
                    <template-switcher />
                </div>
                <!--        /* Right area */-->
                <div class="flex flex-1 items-center justify-end gap-4">
                    <participants />
                    <button class="rounded-lg text-sm" oriButton size="sm">Share</button>
                </div>
            </div>
        </header>
    `
})
export class Header {}
