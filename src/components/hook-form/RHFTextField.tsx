import { TextField, TextFieldProps } from '@mui/material';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';

type Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = TextFieldProps & {
  control: Control<TFieldValues>;
  name: TName;
};

const RHFTextField = function <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  ...other
}: Props<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        /* eslint-disable react/jsx-props-no-spreading */
        return (
          <TextField
            autoFocus
            error={Boolean(error)}
            helperText={error?.message}
            {...field}
            {...other}
          />
          /* eslint-enable react/jsx-props-no-spreading */
        );
      }}
    />
  );
};

export default RHFTextField;
