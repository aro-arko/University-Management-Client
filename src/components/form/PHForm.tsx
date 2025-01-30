import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type formConfig = {
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & formConfig;

const PHForm = ({ onSubmit, children, defaultValues }: TFormProps) => {
  const formConfig: formConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHForm;
