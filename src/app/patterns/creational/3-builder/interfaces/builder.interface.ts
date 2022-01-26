export interface IBuilder {
  getResult(): void;
  reset(): void;

  formatSpaces(): void;
  formatLinks(): void;
  censorObscene(): void;
}
