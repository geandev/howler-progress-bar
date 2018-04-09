# howler-progress-bar
Howler-progress-bar for Angular 5

### Register the component on app.module.ts
```
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
