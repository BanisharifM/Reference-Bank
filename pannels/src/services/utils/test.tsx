import * as React from "react";
import { Dispatch } from "react";

function createCtx<A extends {} | null>() {
  const ctx = React.createContext<A | undefined>(undefined);
  const useCtx = () => {
    const c = React.useContext(ctx);
    if (c === undefined) {
      throw new Error("useCtx must be inside a Provider with a value");
    } else return c;
  };
  return { ctx, useCtx } as const;
}
const userCtx = createCtx<string>();
export const useUser = userCtx.useCtx;
export const userContext = userCtx.ctx;

const userDispatchCtx = createCtx<Dispatch<React.SetStateAction<string>>>();
export const useUserDispatch = userDispatchCtx.useCtx;
export const userDispatchContext = userDispatchCtx.ctx;

const UserProvider: React.FC = (children) => {
  const [user, setUser] = React.useState("");
  return (
    <userContext.Provider value={user}>
      <userDispatchContext.Provider value={setUser}>
        {children}
      </userDispatchContext.Provider>
    </userContext.Provider>
  );
};

// type pickCard = {
//   (x: number): { name: string; card: string };
//   (x: { name: string; card: string }): number;
// };
// function pickCard(x: { suit: string; card: number }[]): number;
// function pickCard(x: number): { suit: string; card: number };

// function pickCard(x: any): any {
//   if (typeof x == "number") {
//     return { suit: "a", card: 1 };
//   } else if (typeof x == "object") {
//     return 1;
//   }
// }
// pickCard(1);
// // function pickCard(x: { suit: string; card: number }[]): number;
// function pickCard(x: number): { suit: string; card: number };
// function pickCard(x: any): any {
//   if (typeof x == "object") {
//     return 1;
//   }
//   else if (typeof x == "number") {
//     return { suit: "test", card: 13 };
//   }
// }

type User = {
  name: string;
  age: string;
  isAuth: boolean;
};
/**
 * ("a" extends "a" ? never : "a" | "b") | ("b" extends "a" ? never : "a" | "b")
 * never | "a" | "b"
 *
 */
// type U = Omit<User , 'age'>
// type U = Exclude<"a" | "b", "a">;
// type Y = Extract<"a" | "b" , "a">

// declare function felan (x : string) : number

// type T = Parameters<(name :string)=> string>
// type U = Parameters <typeof felan>
// const ff : T = ['ali' ]

// type ReadOnly<T>= {
//   readonly [key in keyof T] : T[key]
// }
// const user : Readonly<User> = {
//   name : 'ali',
//   age : '14',
//   isAuth : true
// }

// type U = ReadonlyArray<string>

// type Pickk<T, U extends keyof T> = {
//   [key in U]: T[U];
// };
// type P = Pick<{ name: string; age: number }, "age">;

// type Rec<T extends keyof any, U> = {
//   [key in T]: U;
// };
// type Test = Record<'name' | 'age' , {pet : 14}>

type R = ReturnType<()=>string>

hi there im here

