import { TextField } from "@mui/material"
import { Controller } from "react-hook-form"

export const FormField = ({ control, field }: any) => (
  <Controller
    name={field.name}
    control={control}
    rules={field.rules}
    render={({ field: f, fieldState }: any) => (
      <TextField
        {...f}
        label={field.label}
        type={field.type}
        fullWidth
        error={!!fieldState.error}
        helperText={fieldState.error?.message || ""}
      />
    )}
  />
)
