import Generics from "./generics";

const identifiedNumber = Generics.identity<number>([2]);
const inferedString = Generics.identity(["hello !"]);
