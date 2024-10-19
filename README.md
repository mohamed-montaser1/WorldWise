# (Link vs NavLink) React Router Components

## Link

The Link component main purpose is to navigate between pages without refresh the page.

### How It Works

- It takes a `to` prop which is the path to the destination page.
- It doesn't reload the page when navigating between pages.

### Example

```jsx
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
      <Link to="/about">Go to About</Link>
    </div>
  );
}
```

### NavLink

It's the same as Link component but the difference is:

- It gives the link element two props

  - `aria-current`
  - `class="active"`

- so you can know the active link by selecting it using `active` class
