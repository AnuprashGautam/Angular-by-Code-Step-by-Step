## 🧠 1. The Problem Before Signals

Before signals, Angular used something called **change detection** with **zones**.
That means when *anything* changed in your app (a click, input, timeout, etc.), Angular would check **the entire component tree** to see what’s different.

It worked fine but had downsides:

* It could be **inefficient** (too many checks).
* Hard to know **where** a value changed.
* Required **manual detection strategies** or **RxJS Observables** for complex state.

---

## ⚡ 2. The Idea of Signals

A **signal** is a special kind of **reactive variable** —
it *knows* when its value changes and *automatically updates* anything that depends on it.

In simple words:

> A **signal** is like a variable that *notifies* Angular whenever it changes.

---

## 🎯 3. Analogy: Electric Wires ⚡

Imagine a signal as a **wire** that carries data.
When you change the data in the wire, everything connected to it instantly knows.

* **Normal variable:** You change it, but Angular won’t know automatically.
* **Signal:** You change it, and Angular reacts immediately.

---

## 🧩 4. Basic Example

### Without signal (old way)

```typescript
count = 0;

increase() {
  this.count++;
}
```

In this case, Angular won’t automatically detect this unless an event or change detection runs.

---

### With signal (new way)

```typescript
import { signal } from '@angular/core';

count = signal(0);

increase() {
  this.count.update(c => c + 1);
}
```

And in the template:

```html
<h3>Count: {{ count() }}</h3>
<button (click)="increase()">+</button>
```

🪄 Output updates **automatically** whenever `count` changes — no extra triggers needed!

---

## 🧠 5. How It Works Under the Hood

When you use a signal:

* You **read** it using `count()` (not just `count`)
* You **update** it using `.set()` or `.update()`
* Angular **tracks** who is “listening” to it (the template or computed signals)
* When it changes, Angular **re-renders only what depends on it**

This gives you **fine-grained reactivity** 🔍 — only the affected parts update.

---

## ⚙️ 6. Common Signal Operations

| Operation          | Description               | Example                    |
| ------------------ | ------------------------- | -------------------------- |
| `signal(value)`    | Create a signal           | `name = signal('Anu')`     |
| `count()`          | Read value                | `console.log(count())`     |
| `count.set(value)` | Set new value             | `count.set(10)`            |
| `count.update(fn)` | Update based on old value | `count.update(c => c + 1)` |

---

## 🧩 7. Computed Signals

A **computed** signal is like a *formula* that depends on other signals.
It updates automatically when any of its dependencies change.

Example:

```typescript
import { signal, computed } from '@angular/core';

count = signal(2);
double = computed(() => this.count() * 2);
```

Now:

```html
<p>Count: {{ count() }}</p>
<p>Double: {{ double() }}</p>
```

If you call `this.count.update(c => c + 1)`,
`double()` automatically recalculates — **no manual refresh** needed.

---

## 🔁 8. Effect Signals

An **effect** runs a piece of code *automatically* whenever one of its dependent signals changes.

Example:

```typescript
import { signal, effect } from '@angular/core';

count = signal(0);

constructor() {
  effect(() => {
    console.log('Count changed to:', this.count());
  });
}

increase() {
  this.count.update(c => c + 1);
}
```

When you click a button to increase count:

```
Count changed to: 1
Count changed to: 2
Count changed to: 3
```

So, `effect()` is like a *listener* for signal changes.

---

## 🧱 9. Putting It All Together (Example)

```typescript
import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <h2>Count: {{ count() }}</h2>
    <h3>Double: {{ double() }}</h3>
    <button (click)="increase()">Increase</button>
    <button (click)="reset()">Reset</button>
  `
})
export class CounterComponent {
  count = signal(0);
  double = computed(() => this.count() * 2);

  constructor() {
    effect(() => console.log('Current count:', this.count()));
  }

  increase() {
    this.count.update(c => c + 1);
  }

  reset() {
    this.count.set(0);
  }
}
```

✅ When you click:

* Template updates instantly.
* Computed value recalculates.
* Effect runs automatically.

---

## 🚀 10. Why Signals Are Powerful

| Old Way                              | New (Signals)                |
| ------------------------------------ | ---------------------------- |
| Uses change detection and zones      | Uses direct reactivity       |
| Hard to know dependencies            | Explicit dependencies        |
| Can re-render whole components       | Updates only what changed    |
| Often needs RxJS for state           | Simpler, built-in reactivity |
| Manual `ChangeDetectorRef` sometimes | Automatic updates            |

---

## 🧩 11. Simple Visualization

```
Signal (count)
     ↓ changes
Computed (double)
     ↓ updates
Template & Effects
```

Every layer reacts only when its dependency changes — not the whole app.

---

## 🪄 Summary in One Line

> **Signals make Angular smarter, faster, and more predictable by making reactivity explicit and fine-grained.**

