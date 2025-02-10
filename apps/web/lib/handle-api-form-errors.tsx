import { UseFormReturn } from "react-hook-form";

export const handleApiFormErrors = async (
  errorResponse: any,
  form: UseFormReturn<any>,
) => {
  try {
    const errorData = await errorResponse.json();

    if (errorData.details) {
      Object.entries(errorData.details).forEach(([field, message]) => {
        form.setError(field as any, { message: message as string });
      });
    }
  } catch (parseError) {
    console.error("Failed to parse error response:", parseError);
  }
};
