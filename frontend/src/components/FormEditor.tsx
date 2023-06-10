import { ArticleFormType } from "../types/article";
import { Control, Controller } from "react-hook-form";
import { CustomEditor } from "./CustomEditor";
import { ErrorText } from "./ErrorText";

// TODO: change to generic
interface FormEditorProps {
  name: "content";
  control: Control<ArticleFormType>;
  placeholder: string;
  errorMessage?: string;
}

export const FormEditor = ({
  name,
  control,
  placeholder,
  errorMessage,
}: FormEditorProps) => {
  return (
    <>
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
      <ErrorText message={errorMessage} />{" "}
    </>
  );
};
