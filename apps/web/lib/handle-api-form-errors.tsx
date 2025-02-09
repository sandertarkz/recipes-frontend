import { UseFormReturn } from "react-hook-form";

export const handleApiFormErrors = async (
  error: any,
  form: UseFormReturn<any>,
) => {
  if (error.response) {
    try {
      const errorData = await error.response.json(); // Explicitly parse JSON
      console.log("Parsed error data:", errorData);

      if (errorData.detail) {
        Object.entries(errorData.detail).forEach(([field, message]) => {
          form.setError(field as any, { message: message as string });
        });
      }
    } catch (parseError) {
      console.error("Failed to parse error response:", parseError);
    }
  } else {
    console.log("No response from API");
  }
};
