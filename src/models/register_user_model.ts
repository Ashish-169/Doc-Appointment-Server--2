import ThrowError from "../middlware/error";

export interface RegisterUserProps {
  name: string;
  email: string;
  password: string;
}

class RegisterUser {
  name: string;
  email: string;
  password: string;

  constructor(userData: RegisterUserProps) {
    this.name = userData.name;
    this.email = userData.email;
    this.password = userData.password;

    this.validateFields();
  }

  private validateFields(): void {
    const missingFields: string[] = [];

    if (!this.name) {
      missingFields.push("name");
    }
    if (!this.email) {
      missingFields.push("email");
    }
    if (!this.password) {
      missingFields.push("password");
    }

    if (missingFields.length > 0) {
      const errorMessage = `Missing Fields: ${missingFields.join(", ")}.`;
      throw new ThrowError(400, "Validation Error", errorMessage);
    }

    // You can add more validation here (e.g., email format, password strength)
  }
}

export default RegisterUser;
