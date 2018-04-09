import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

@Component({
    selector: 'progress-bar',
    templateUrl: 'progress-bar.component.html'
})

export class ProgressBarComponent implements OnInit {

    @Input()
    public player: Howl

    @Output()
    public playing = new EventEmitter<[number, number]>()

    public value: number
    public maxValue: number

    private updateObservable: Observable<number>
    private updateSubscriber: Subscription

    ngOnInit(): void {
        this.player.on('play', () => this.onPlay())
        this.player.on('pause', () => this.onPause())

        this.setupUpdateObservable()
    }

    change(value: number) {
        this.player.seek(value)
    }

    getCurrentDuration(): number {
        return Math.round(<number>this.player.seek())
    }

    getMaxDuration(): number {
        return Math.round(<number>this.player.duration())
    }

    private setupUpdateObservable() {
        this.value = 0
        this.maxValue = 0
        this.updateObservable = Observable.interval(1000)
    }

    private onPlay() {
        this.updateSubscriber = this.updateObservable.subscribe(() => {
            this.value = this.getCurrentDuration()
            this.maxValue = this.getMaxDuration()
            this.playing.emit([this.value, this.maxValue])
        })
    }

    private onPause() {
        this.updateSubscriber.unsubscribe()
    }

}