import { TextField } from "@mui/material"
import { Controller } from "react-hook-form"

export const FormField = ({ control, field }: any) => (
  <Controller
    name={field.name}
    control={control}
    rules={{ required: field.required }}
    render={({ field: f, fieldState }: any) => (
      <TextField
        {...f}
        label={field.label}
        fullWidth
        error={!!fieldState.error}
        helperText={fieldState.error ? "Required" : ""}
      />
    )}
  />
)
