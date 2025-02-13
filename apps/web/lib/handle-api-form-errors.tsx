import { UseFormReturn } from "react-hook-form";

export const handleApiFormErrors = async (
  error: any, // TODO type this
  form: UseFormReturn<any>,
) => {
  try {
    if (error?.response?.detail) {
      Object.entries(error?.response?.detail).forEach(([field, message]) => {
        form.setError(field as any, { message: message as string });
      });
    }
  } catch (parseError) {
    console.error("Failed to parse error response:", parseError);
  }
};
