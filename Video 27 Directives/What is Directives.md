# ⭐ **Directives in Angular (Explained Simply)**

## 🧠 **What is a Directive?**

A **directive** in Angular is like a **special instruction** that you attach to your HTML to give it **extra behavior**.

Think of your HTML as a car 🚗 and directives as **accessories** (like headlights ON/OFF, seat adjuster, music system).
They **change behaviour**, **add logic**, or **change appearance** of elements.

---

# 🌟 **3 Types of Directives in Angular**

Angular has **three main types**:

1. **Component Directives**
2. **Structural Directives**
3. **Attribute Directives**

Let’s understand them one by one.

---

# 1️⃣ **Component Directive**

A **component itself is also a directive**, but with a template attached.

📌 **It tells Angular:**
"Create this part of the UI using this HTML + TS + CSS."

Example:

```ts
@Component({
  selector: 'app-hero',
  template: `<h2>Hero Works!</h2>`
})
export class HeroComponent {}
```

Use in HTML:

```html
<app-hero></app-hero>
```

✔ This is a **component directive** because it *controls a block of UI*.

---

# 2️⃣ **Structural Directives**

These **change the structure of the DOM**—meaning they **add/remove/modify** HTML elements.

These directives **start with `*`**.

### Most common structural directives:

| Directive   | What it does                         |
| ----------- | ------------------------------------ |
| `*ngIf`     | Conditionally shows/hides an element |
| `*ngFor`    | Loops over a list                    |
| `*ngSwitch` | Multi-condition display              |

---

### ✔ Example 1: `*ngIf`

```html
<p *ngIf="isLoggedIn">Welcome back!</p>
```

If `isLoggedIn = true`, it adds `<p>`.
If false → it removes it completely.

🧠 Analogy:
It works like a **gatekeeper** that decides whether a guest enters or not.

---

### ✔ Example 2: `*ngFor`

```html
<li *ngFor="let item of items">{{ item }}</li>
```

🧠 Analogy:
It works like a **photocopy machine**—makes copies of the template for each item.

---

### ✔ Example 3: `*ngSwitch`

```html
<div [ngSwitch]="role">
  <p *ngSwitchCase="'admin'">Admin Panel</p>
  <p *ngSwitchCase="'user'">User Panel</p>
  <p *ngSwitchDefault>Guest</p>
</div>
```

🧠 Analogy:
Like a **TV remote**—chooses 1 channel based on input.

---

# 3️⃣ **Attribute Directives**

These **change the appearance or behavior** of an element.

They do **not** change DOM structure.

### Common attribute directives:

| Directive    | Purpose            |
| ------------ | ------------------ |
| `ngClass`    | Add/remove classes |
| `ngStyle`    | Add/remove styles  |
| `ngModel`    | Two-way binding    |
| `routerLink` | Routing behavior   |

---

### ✔ Example 1: `ngStyle`

```html
<p [ngStyle]="{ color: 'blue', fontSize: '20px' }">Styled text</p>
```

---

### ✔ Example 2: `ngClass`

```html
<div [ngClass]="{ active: isActive }">Hello</div>
```

---

### ✔ Example 3: `ngModel`

```html
<input [(ngModel)]="username">
```

🧠 Analogy:
Attribute directives are like applying **makeup or tools** to an element to modify its behavior or look.

---

# ⚙️ **Custom Directives**

You can create your own directive.

Example: a directive that highlights text on hover.

```ts
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.background = 'yellow';
  }
}
```

Use:

```html
<p appHighlight>Hover me!</p>
```

---

# 🎯 **Summary (Very Short)**

| Type                     | What it does          | Example                  |
| ------------------------ | --------------------- | ------------------------ |
| **Component Directive**  | Controls a UI block   | `<app-root>`             |
| **Structural Directive** | Adds/removes elements | `*ngIf`, `*ngFor`        |
| **Attribute Directive**  | Changes look/behavior | `[ngStyle]`, `[ngClass]` |

