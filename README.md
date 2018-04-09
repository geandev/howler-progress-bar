# howler-progress-bar
Howler-progress-bar for Angular 5

### Register the component on app.module.ts
```typescript
import { ProgressBarModule } from './components/howler-progress-bar/progress-bar.module'

@NgModule({
  imports: [
    ...,
    ProgressBarModule
  ],
  declarations: [
    ...
  ],
  bootstrap: [...]
})
```

### Now you can use :)

```html
<progress-bar [player]="sound"></progress-bar>
```
### Properties
#### sound:Howl
Howl instance

```html
<progress-bar [player]="sound"></progress-bar>
```

### Methods
#### playing([currentSeek, audioDuration]:[number,number])
Get current seek and audioDuration for each one second

```html
<progress-bar [player]="sound" (playing)="onPlaying($event)"></progress-bar>
```

#### change(position:number):void
#### getCurrentDuration():number
#### getMaxDuration():number
Get current seek and audioDuration for each one second

```typescript
import { Component, ViewChild } from '@angular/core';
import { Howl } from 'howler';

import { ProgressBarComponent } from './components/howler-progress-bar/progress-bar.component'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  @ViewChild(ProgressBarComponent) progressBar: ProgressBarComponent

  next(){
    const seekValue = this.progressBar.getCurrentDuration() + 5
    this.progressBar.change(seekValue)
  }

  prev(){
    const seekValue = this.progressBar.getCurrentDuration() - 5
    this.progressBar.change(seekValue)
  }
}
```
