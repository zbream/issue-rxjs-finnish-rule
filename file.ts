import { Subject } from 'rxjs';

class MyClass {
  myProperty$: Subject<number> = new Subject<number>();
  myOptionalProperty?: Subject<number> = new Subject<number>();
}