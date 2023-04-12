import {
  createContext,
  useReducer,
  PropsWithChildren,
  useContext,
} from "react";

interface User {
  id: string;
  count: number;
  name: string;
  email: string;
}

interface UserState {
  user: User;
}

type UserAction =
  | { type: "edit"; user: User }
  | { type: "error"; errorMessage: string };

type Dispatch = (action: UserAction) => void;

export const UserContext = createContext<User | null>(null);
export const UserDispatchContext = createContext<Dispatch | null>(null);

interface Props {}

export function UserProvider({ children }: PropsWithChildren<Props>) {
  const [state, dispatch] = useReducer(reducer, { user: initialUser });

  return (
    <UserContext.Provider value={state.user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

function reducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case "edit": {
      return { user: action.user };
    }
    case "error": {
      throw new Error(action.errorMessage);
    }
    default: {
      throw new Error(`Unhandled action type: test`);
    }
  }
}

const initialUser: User = {
  id: "",
  count: 0,
  name: "tutu",
  email: "",
};

export function useUser() {
  const user = useContext(UserContext);
  if (user === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return user;
}

export function useUserDispatch() {
  const dispatch = useContext(UserDispatchContext);
  if (dispatch === null) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return dispatch;
}
