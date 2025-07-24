import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../components/header';

@Component({
    imports: [RouterModule, Header],
    selector: 'app-root',
    template: `
        <div class="flex min-h-svh flex-col">
            <app-header />
        </div>
    `
})
export class App {}
