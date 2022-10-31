import { UseFormRegister } from "react-hook-form";

interface iInput {
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  chave: string;
}
const Input = ({ id, type, placeholder, register, chave }: iInput) => {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input type={type} placeholder={placeholder} {...register(chave)} />
    </>
  );
};

export default Input;
