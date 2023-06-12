export default class Generics {
  public static identity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
  }
}
