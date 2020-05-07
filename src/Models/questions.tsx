import IOption from "./options";

export default interface IQuestion {
  id: string,
  text: string,
  options: IOption[]
}