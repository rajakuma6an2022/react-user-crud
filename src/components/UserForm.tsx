import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Stack } from "@mui/material";
import { userFormConfig } from "../config/userFormConfig";
import { FormField } from "./FormField";

const EMPTY_FORM = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

export default function UserForm({
  onSubmit,
  defaultValues,
  submitLabel = "Save",
}: any) {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: EMPTY_FORM,
    mode : "onChange"
  });

  useEffect(() => {
    reset(defaultValues || EMPTY_FORM);
  }, [defaultValues, reset]);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        {userFormConfig.map((f: any) => (
          <FormField key={f.name} field={f} control={control} />
        ))}
        <div className="col-12 d-flex justify-content-end">
          <Button variant="contained" type="submit">
            {submitLabel}
          </Button>
        </div>
      </Stack>
    </Box>
  );
}
