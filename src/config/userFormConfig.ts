export const userFormConfig = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    rules: {
      required: "First name is required"
    }
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    rules: {
      required: "Last name is required"
    }
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "text",
    rules: {
      required: "Phone number is required",
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: "Phone must be 10 digits and start with 6,7,8,9"
      }
    }
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format"
      }
    }
  }
]
