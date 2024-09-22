import ThrowError from "../middlware/error";

// Interface to define the structure of the input data for registration
export interface RegistrationProps {
  name: string;
  email: string;
  phone: string;
  appointmentDate: Date;
  purpose: string;
}

class Registration {
  name: string;
  email: string;
  phone: string;
  appointmentDate: Date;
  purpose: string;

  constructor(registration: RegistrationProps) {
    this.name = registration.name;
    this.email = registration.email;
    this.phone = registration.phone;
    this.appointmentDate = registration.appointmentDate;
    this.purpose = registration.purpose;

    // Optional: Console logging for debugging purposes
    // console.log("name:", registration.name);
    // console.log("email:", registration.email);
    // console.log("phone:", registration.phone);
    // console.log("appointmentDate:", registration.appointmentDate);
    // console.log("purpose:", registration.purpose);

    // Validate fields
    this.validateRegistrationModelInfoFields();
  }

  // Method to validate the presence of required fields
  public validateRegistrationModelInfoFields(): void {
    const missingFields: string[] = [];

    if (!this.name) {
      missingFields.push("Registration Model name");
    }

    if (!this.email) {
      missingFields.push("Registration Model email");
    }

    if (!this.phone) {
      missingFields.push("Registration Model phone");
    }

    if (!this.appointmentDate) {
      missingFields.push("Registration Model appointmentDate");
    }

    if (!this.purpose) {
      missingFields.push("Registration Model purpose");
    }

    // If there are missing fields, throw an error
    if (missingFields.length > 0) {
      let errorMessage = `Missing Fields: ${missingFields.join(", ")}.`;
      throw new ThrowError(400, "Validation Error", errorMessage);
    }
  }
}

export default Registration;
