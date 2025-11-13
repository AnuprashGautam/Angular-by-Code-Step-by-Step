# 🔔 **Types of Signals in Angular (Angular 16+)**

Angular provides **three main types** of signals:

1. **Writable Signal**
2. **Computed Signal**
3. **Effect Signal**

Let’s understand them with analogies and code.

---

# 1️⃣ Writable Signal

### 📌 *Think of it as a container that stores a value, and you can change that value anytime.*

### ✔ What it does

* Holds a single value
* Can be updated, set, or modified
* Components automatically re-render when its value changes

### 📦 Analogy

A writable signal is like a **box** where you keep something (e.g., money).
You can **put**, **replace**, or **modify** the content.

### 🧪 Example

```ts
import { signal } from '@angular/core';

count = signal(0);

// update value
count.set(10);

// increment using update()
count.update(value => value + 1);
```

---

# 2️⃣ Computed Signal

### 📌 *A value that is automatically calculated based on other signals.*

### ✔ What it does

* Read-only
* Automatically recalculates when dependent signals change

### 📦 Analogy

Imagine you have:

* A box with **item price**
* A box with **quantity**

A computed signal is like a **calculator** that always shows *price × quantity* — automatically, without pressing any button.

### 🧪 Example

```ts
import { signal, computed } from '@angular/core';

price = signal(100);
quantity = signal(2);

// computed value
total = computed(() => price() * quantity());
```

If `price.set(200)` → `total` updates automatically.

---

# 3️⃣ Effect Signal

### 📌 *Runs some side-effect code whenever the used signals change.*

### ✔ What it does

* Executes a function automatically
* Used for logging, API calls, localStorage updates, DOM actions, etc.
* Does NOT return a value

### 📦 Analogy

A burglar alarm system.
Whenever the door (signal) changes position, the alarm (effect) runs automatically.

### 🧪 Example

```ts
import { signal, effect } from '@angular/core';

count = signal(0);

effect(() => {
  console.log("Count changed:", count());
});
```

Whenever `count.set(5)`, the effect runs.

---

# 🧷 **Summary Table**

| Type of Signal | Writable?      | Auto updates?                        | Purpose               |
| -------------- | -------------- | ------------------------------------ | --------------------- |
| **Writable**   | Yes            | No                                   | Store & update values |
| **Computed**   | No (read-only) | Yes                                  | Derived values        |
| **Effect**     | Not a value    | Runs when signals used inside change | Perform side effects  |

---

# 🎉 Quick Visual Analogy

| Signal Type  | Analogy                                                      |
| ------------ | ------------------------------------------------------------ |
| **Writable** | A box where you can change what's inside                     |
| **Computed** | A calculator watching boxes & updating results automatically |
| **Effect**   | An alarm that runs whenever something in the boxes changes   |

