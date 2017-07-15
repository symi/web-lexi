export default class Thing {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  removeName(): void {
    this.name = "";
  }
}
