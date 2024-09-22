import ThrowError from "../middlware/error";

// Interface to define the structure of the input data
export interface UserProps {
  email: string;
  password: string;
}

class User {
  email: string;
  password: string;

  constructor(user: UserProps) {
    this.email = user.email;
    this.password = user.password;

    // Console logging for debugging (optional)
    // console.log("email:", user.email);
    // console.log("password:", user.password);

    // Validate fields
    this.validateUserModelInfoFields();
  }

  // Method to validate the presence of required fields
  public validateUserModelInfoFields(): void {
    const missingFields: string[] = [];

    if (!this.email) {
      missingFields.push("User Model email");
    }

    if (!this.password) {
      missingFields.push("User Model password");
    }

    // If there are missing fields, throw an error
    if (missingFields.length > 0) {
      let errorMessage = `Missing Fields: ${missingFields.join(", ")}.`;
      throw new ThrowError(400, "Validation Error", errorMessage);
    }
  }
}

export default User;
