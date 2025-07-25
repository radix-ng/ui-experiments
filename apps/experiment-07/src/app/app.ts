import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../components/header';
import { SchemaVisualizer } from '../components/schema-visualizer';

@Component({
    imports: [RouterModule, Header, SchemaVisualizer],
    selector: 'app-root',
    template: `
        <div class="flex min-h-svh flex-col">
            <app-header />
            <schema-visualizer />
        </div>
    `
})
export class App {}
