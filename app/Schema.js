import * as Yup from "yup";

export const contactSchema = Yup.object({
    firstName: Yup.string()
        .min(3, "First name must be at least 3 characters")
        .required("Please enter your first name"),

    lastName: Yup.string()
        .min(3, "Last name must be at least 3 characters")
        .required("Please enter your last name"),

    email: Yup.string()
        .email("Invalid email format")
        .required("Please enter your email"),

    phone: Yup.string()
        .min(10, "Phone number must be at least 10 digits")
        .required("Please enter your phone number"),

    service: Yup.string()
        .required("Please select a service"),

    message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Please enter your message"),
});
