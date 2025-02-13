import { UseFormReturn } from "react-hook-form";

export const handleApiFormErrors = async (
  errorResponse: any,
  form: UseFormReturn<any>,
) => {
  try {
    const errorData = await errorResponse.json();
    console.log(errorData);
    if (errorData.detail) {
      Object.entries(errorData.detail).forEach(([field, message]) => {
        form.setError(field as any, { message: message as string });
      });
    }
  } catch (parseError) {
    console.error("Failed to parse error response:", parseError);
  }
};
