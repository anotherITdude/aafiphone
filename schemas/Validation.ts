// validationSchema.js
import * as yup from "yup";

interface File {
  size: number;
  type: string;
}

export type FormValues = {
  name: string;
  mobile: string;
  email: string;
  emirate: string;
  eid: string;
  lan: string;
  selected: boolean;
  info: string;
  receipt: FileList;
};

export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  mobile: yup
    .string()
    .required("Mobile is required")
    .min(10, "Mobile must be at least 10 digits"),
  email: yup.string().required("Email is required").email("Invalid email"),
  emirate: yup.string().required("Emirate is required"),
  eid: yup
    .string()
    .nullable()
    .test(
      "is-number-and-min-digits",
      "EID must be numeric and at least 15 digits",
      (value) => {
        if (!value) {
          return true; // If field is empty, consider it valid
        }

        // Validate if the value is a number with at least 15 digits
        return /^\d{15,}$/.test(value);
      },
    ),
  receipt: yup
    .mixed()
    .required("Receipt is required")
    .test(
      "fileSize",
      "Please upload your receipt. Max 2MB",
      (value: any, context) => {
        if (!value || !value[0]) {
          return false; // No file selected, return false to trigger the error
        }

        return value[0].size <= 2000000; // File size limit is 2 MB (2000000 bytes)
      },
    ),
});
