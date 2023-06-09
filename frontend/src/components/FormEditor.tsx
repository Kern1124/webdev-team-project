import { ArticleFormType } from "../types/article";
import { Control, Controller } from "react-hook-form";
import { CustomEditor } from "./CustomEditor";

// TODO: change to generic
interface FormEditorProps {
  name: "content";
  control: Control<ArticleFormType>;
  placeholder: string;
}

export const FormEditor = ({ name, control, placeholder }: FormEditorProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <CustomEditor
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    />
  );
};
