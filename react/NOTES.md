# Extracting State Logic into a Reducer

- URL : https://react.dev/learn/extracting-state-logic-into-a-reducer

# Context API - useContext hook

- Context lets a parent component provide data to the entire tree below it.

# Using propsWithChildren type

- We can internally type the children prop using PropsWithChildren

```jsx
import { PropsWithChildren } from "react";

type State = "ACTIVE" | "DISABLE" | "CLICKED";

interface Props {
  state: State;
}

export default function Button(props: PropsWithChildren<Props>) {
  return (
    <>
      <button className={props.state}>{props.children}</button>
    </>
  );
}
```
