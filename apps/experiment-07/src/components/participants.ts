import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'participants',
    imports: [
        NgOptimizedImage
    ],
    template: `
        <div class="flex -space-x-[0.6rem] max-sm:hidden">
            <div class="size-8">
                <img
                    class="ring-background shrink-0 rounded-full ring-2"
                    ngSrc="https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp7/participant-01_fhwvxn.png"
                    width="32"
                    height="32"
                    alt="Avatar 01"
                />
            </div>
            <div class="size-8">
                <img
                    class="ring-background shrink-0 rounded-full ring-2"
                    ngSrc="https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp7/participant-02_jl473r.png"
                    width="32"
                    height="32"
                    alt="Avatar 02"
                />
            </div>
            <div class="size-8">
                <img
                    class="ring-background shrink-0 rounded-full ring-2"
                    ngSrc="https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp7/participant-03_dyfplu.png"
                    width="32"
                    height="32"
                    alt="Avatar 03"
                />
            </div>
            <div class="size-8">
                <img
                    class="ring-background shrink-0 rounded-full ring-2"
                    ngSrc="https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp7/participant-04_mumzou.png"
                    width="32"
                    height="32"
                    alt="Avatar 04"
                />
            </div>
        </div>
    `
})
export class Participants {}
