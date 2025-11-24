# Angular component lifecycle — easy, detailed, and practical

Think of an Angular component like a person going through stages: born, learns things, checks its surroundings, shows stuff to the world, updates when its inputs change, and finally cleans up before leaving. Angular gives you **lifecycle hooks** — methods you can implement to run code at each of those stages.

Below I’ll explain each hook in order, show when it runs, what parameters it receives, a clear use-case, common pitfalls, and a compact example you can paste into an Angular component.

---

## Lifecycle hooks — short list (in order)

1. `ngOnChanges(changes: SimpleChanges)`
2. `ngOnInit()`
3. `ngDoCheck()`
4. `ngAfterContentInit()`
5. `ngAfterContentChecked()`
6. `ngAfterViewInit()`
7. `ngAfterViewChecked()`
8. `ngOnDestroy()`

> Interfaces you can implement from `@angular/core`:
> `OnChanges`, `OnInit`, `DoCheck`, `AfterContentInit`, `AfterContentChecked`, `AfterViewInit`, `AfterViewChecked`, `OnDestroy`.

---

## Visual timeline (simple)

Component is created →
`ngOnChanges` (if inputs exist) →
`ngOnInit` →
`ngDoCheck` →
`ngAfterContentInit` →
`ngAfterContentChecked` →
`ngAfterViewInit` →
`ngAfterViewChecked`
(→ updates repeat: `ngOnChanges` → `ngDoCheck` → `ngAfterContentChecked` → `ngAfterViewChecked`)
When component removed → `ngOnDestroy`.

---

## Detailed explanation of each hook

### 1) `ngOnChanges(changes: SimpleChanges)`

* **When it runs:** Right **after** Angular sets or updates any `@Input()` properties — including the first time they are set (before `ngOnInit`).
* **Signature:** `ngOnChanges(changes: SimpleChanges)` where `changes` maps input names → `SimpleChange` objects `{ previousValue, currentValue, firstChange }`.
* **Use cases:** React to input changes, compute derived values from inputs, start animations when input changes.
* **Important:** It runs only for inputs bound from a parent (`@Input`). It won't fire if a local property changes inside the same component.
* **Pitfall:** Avoid heavy work here because it can be called frequently.

Example:

```ts
ngOnChanges(changes: SimpleChanges) {
  if (changes['user']) {
    const prev = changes['user'].previousValue;
    const curr = changes['user'].currentValue;
    // do something when input 'user' changes
  }
}
```

---

### 2) `ngOnInit()`

* **When it runs:** Once — after the first `ngOnChanges` (if any) and just before the view is displayed.
* **Signature:** `ngOnInit(): void`
* **Use cases:** Initialization that needs component's inputs to be set (fetch data, set up initial state, start subscriptions with services).
* **Important:** Use it instead of doing heavy initialization in the constructor. Constructor should be for dependency injection only.
* **Pitfall:** Inputs are available here; DOM child elements may not be ready (if you need children, use `AfterViewInit`).

Example:

```ts
ngOnInit() {
  this.loadInitialData();
}
```

---

### 3) `ngDoCheck()`

* **When it runs:** After every change detection run — extremely frequently (many times per second on heavy apps).
* **Signature:** `ngDoCheck(): void`
* **Use cases:** Implement custom change detection logic when Angular's default change detection can't detect something (e.g., mutations inside objects/arrays).
* **Important:** Very powerful but dangerous — can cause performance issues if misused.
* **Pitfall:** Avoid expensive computation here. Prefer immutable patterns or `OnPush` change detection and `ngOnChanges`.

Example (very simple):

```ts
ngDoCheck() {
  // custom check: compare serialized value or a cached fingerprint
}
```

---

### 4) `ngAfterContentInit()`

* **When it runs:** After Angular projects external content into the component (i.e., after `<ng-content>` content is initialized), and runs once.
* **Signature:** `ngAfterContentInit(): void`
* **Use cases:** When your component receives projected content (via `<ng-content>`), and you need to access/query that content or run logic after it’s inserted.
* **Pitfall:** This is not for view child elements created by the component template — use `AfterViewInit` for those.

---

### 5) `ngAfterContentChecked()`

* **When it runs:** After every change detection run once content has been checked. Runs many times.
* **Signature:** `ngAfterContentChecked(): void`
* **Use cases:** Verify or update something based on projected content changes.
* **Pitfall:** Heavy logic here causes performance problems.

---

### 6) `ngAfterViewInit()`

* **When it runs:** Once — after Angular has initialized the component’s view and child views (this includes components declared in the template and `@ViewChild` elements).
* **Signature:** `ngAfterViewInit(): void`
* **Use cases:** DOM-dependent initialization, reading sizes, focusing an input via `@ViewChild`, third-party UI libs that require DOM to be present.
* **Pitfall:** Do not change bindings here that trigger additional change detection unless necessary — if you must, wrap with `setTimeout()` or `ChangeDetectorRef.detectChanges()` carefully.

Example:

```ts
@ViewChild('myInput') myInput!: ElementRef;

ngAfterViewInit() {
  this.myInput.nativeElement.focus();
}
```

---

### 7) `ngAfterViewChecked()`

* **When it runs:** After every change detection run once the view is checked. Repeats many times.
* **Signature:** `ngAfterViewChecked(): void`
* **Use cases:** Final verification after view updates. Often not needed.
* **Pitfall:** Avoid DOM writes that cause change detection loops.

---

### 8) `ngOnDestroy()`

* **When it runs:** Just before Angular destroys the component — last chance to clean up.
* **Signature:** `ngOnDestroy(): void`
* **Use cases:** Unsubscribe from Observables, remove event listeners, clear intervals/timeouts, stop animations, release resources.
* **Important:** Forgetting to unsubscribe leads to memory leaks and unexpected behavior.

Example:

```ts
ngOnDestroy() {
  this.subscription.unsubscribe();
  clearInterval(this.timerId);
}
```

---

## Typical patterns & best practices

* **Constructor:** Only inject services, don’t do heavy work.
* **Use `ngOnInit` for initialization** that depends on `@Input` values.
* **Prefer immutable updates** (replace objects/arrays) so Angular detects changes easily. This reduces need for `ngDoCheck`.
* **Unsubscribe in `ngOnDestroy`.** Use `takeUntil()` with a `subject` pattern, or the `async` pipe in templates (the `async` pipe unsubscribes automatically).
* **Avoid heavy logic in `DoCheck`, AfterXChecked hooks.** These run many times.
* **When dealing with DOM or children:** use `@ViewChild` + `ngAfterViewInit`. For projected content (`<ng-content>`), use `ngAfterContentInit`.
* **If you need to react to `@Input` changes:** use `ngOnChanges`. For deep object mutations, either emit a new object (immutable) or add custom checks in `ngDoCheck`.

---

## Example component showing all hooks

```ts
import { Component, Input, OnInit, OnChanges, DoCheck,
         AfterContentInit, AfterContentChecked, AfterViewInit,
         AfterViewChecked, OnDestroy, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-lifecycle-demo',
  template: `
    <div>
      <h3>Lifecycle demo</h3>
      <p>Input value: {{ data }}</p>
      <input #localInput placeholder="type here">
      <ng-content></ng-content>
    </div>
  `
})
export class LifecycleDemoComponent implements OnChanges, OnInit, DoCheck,
                                            AfterContentInit, AfterContentChecked,
                                            AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() data!: string;
  @ViewChild('localInput') localInput!: ElementRef;

  private timerSub!: Subscription;

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
    // Example subscription to show cleanup in ngOnDestroy
    this.timerSub = interval(1000).subscribe(i => console.log('tick', i));
  }

  ngDoCheck() {
    // careful: called very often
    // console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit (projected content ready)');
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit (view and children ready)');
    // safe to access DOM via @ViewChild
    this.localInput.nativeElement.placeholder = 'I was focused!';
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy (cleanup)');
    if (this.timerSub) this.timerSub.unsubscribe();
  }
}
```

---

## Quick tips & common mistakes

* **Don’t put async initialization in constructor.** Use `ngOnInit`.
* **Don’t forget to unsubscribe.** Use `async` pipe or `takeUntil`.
* **Heavy work in checked hooks = slowdown.** Keep `DoCheck`/`After*Checked` minimal.
* **If you see multiple `ngOnChanges` or many checks**, consider how change detection runs — switching to `ChangeDetectionStrategy.OnPush` and using immutable updates often helps.
* **Debugging tip:** Add `console.log` statements in each hook to see order and frequency while developing.

---

## Short cheat-sheet (one-line summary)

* `ngOnChanges` — input changed (can be multiple times before init).
* `ngOnInit` — component init, run once.
* `ngDoCheck` — custom change detection, runs often.
* `ngAfterContentInit` — projected content initialized (once).
* `ngAfterContentChecked` — projected content checked (many times).
* `ngAfterViewInit` — component view & child views initialized (once).
* `ngAfterViewChecked` — view checked (many times).
* `ngOnDestroy` — cleanup before destruction.
