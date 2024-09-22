import express from "express";
import ThrowError from "../../middlware/error";
import DoctorRepository from "./repository";
import { log } from "console";
import Registration from "../../models/register_model";
import RegisterUser from "../../models/register_user_model";

class DoctorController {
  static getAllAppointmentController = async (
    req: express.Request,
    res: express.Response
  ) => {
    try {
      const email = req.body.email;
      console.log("Email To Get Data: ", email);

      let result;

      if (email === "doc@gmail.com") {
        console.log("If email: ", email);

        result = await DoctorRepository.getAllAppointmentRepository();
        console.log("Appointment for Doc: ", result);
      } else {
        console.log("else email: ", email);

        result = await DoctorRepository.getUserAppointment(email);
        //console.log("Appointment for user: ", result);
      }

      if (!result) {
        throw new ThrowError(
          404,
          "No appointment found",
          "No appointment found"
        );
      }

      res.status(200).json({
        code: 200,
        title: "Appointment ",
        message: "Appointment ",
        data: result,
      });
    } catch (e) {
      if (e instanceof ThrowError) {
        res.status(e.code).json({
          code: e.code,
          title: e.title,
          message: e.message,
        });
      } else if (e instanceof Error) {
        res.status(500).json({
          code: 500,
          title: e.name,
          message: e.message,
        });
      } else {
        res.status(500).json({
          code: 500,
          title: "Error",
          message: "Internal Server Error",
        });
      }
    }
  };

  static deleteAppointmentController = async (
    req: express.Request,
    res: express.Response
  ) => {
    const { id } = req.body;
    console.log("id :", id);

    const result = await DoctorRepository.deleteAppointmentRepository(id);

    if (result.deletedCount === 0) {
      // No document was deleted, handle it accordingly
      return res.status(404).json({
        code: 404,
        title: "Not Found",
        message: "No appointment found with the given ID",
      });
    }

    res.status(200).json({
      code: 200,
      title: "Appointment Deleted",
      message: "Appointment deleted successfully",
      data: result,
    });

    try {
    } catch (e) {
      if (e instanceof ThrowError) {
        res.status(e.code).json({
          code: e.code,
          title: e.title,
          message: e.message,
        });
      } else if (e instanceof Error) {
        res.status(500).json({
          code: 500,
          title: e.name,
          message: e.message,
        });
      } else {
        res.status(500).json({
          code: 500,
          title: "Error",
          message: "Internal Server Error",
        });
      }
    }
  };

  static addAppointmentController = async (
    req: express.Request,
    res: express.Response
  ) => {
    try {
      const details = req.body;
      console.log("Type: ", typeof details.appointmentDate);

      console.log("details :", details);

      const check = new Registration(details);

      const result = await DoctorRepository.addAppointmentRepository(details);

      res.status(200).json({
        code: 200,
        title: "Appointment Added",
        message: "Appointment Added",
        data: result,
      });
    } catch (e) {
      if (e instanceof ThrowError) {
        res.status(e.code).json({
          code: e.code,
          title: e.title,
          message: e.message,
        });
      } else if (e instanceof Error) {
        res.status(500).json({
          code: 500,
          title: e.name,
          message: e.message,
        });
      } else {
        res.status(500).json({
          code: 500,
          title: "Error",
          message: "Internal Server Error",
        });
      }
    }
  };

  static registerUserController = async (
    req: express.Request,
    res: express.Response
  ) => {
    try {
      const userData = req.body;
      console.log("UserRegiData: ", userData);

      const registration = new RegisterUser(userData);

      const result = await DoctorRepository.registerUserRepository(userData);

      res.status(200).json({
        code: 200,
        title: "Success",
        message: "User registered successfully",
        data: result,
      });
    } catch (e) {
      if (e instanceof ThrowError) {
        res.status(e.code).json({
          code: e.code,
          title: e.name,
          message: e.message,
        });
      } else if (e instanceof Error) {
        res.status(500).json({
          code: 500,
          title: e.name,
          message: e.message,
        });
      } else {
        res.status(500).json({
          code: 500,
          title: "Error",
          message: "Internal server error",
        });
      }
    }
  };

  static loginUserController = async (
    req: express.Request,
    res: express.Response
  ) => {
    try {
      const userData = req.body;
      console.log("UserRegiData: ", userData);

      const result = await DoctorRepository.loginUserRepository(userData);

      res.status(200).json({
        code: 200,
        title: "Success",
        message: "User login successfully",
        data: result,
      });
    } catch (e) {
      if (e instanceof ThrowError) {
        res.status(e.code).json({
          code: e.code,
          title: e.name,
          message: e.message,
        });
      } else if (e instanceof Error) {
        res.status(500).json({
          code: 500,
          title: e.name,
          message: e.message,
        });
      } else {
        res.status(500).json({
          code: 500,
          title: "Error",
          message: "Internal server error",
        });
      }
    }
  };
  static rescheduleAppointmentController = async (
    req: express.Request,
    res: express.Response
  ) => {
    const { id } = req.body;
    console.log("id :", id);

    const result = await DoctorRepository.getUserAppointment(id);

    const delAppointment = await DoctorRepository.deleteAppointmentRepository(
      id
    );
    if (delAppointment.deletedCount === 0) {
      // No document was deleted, handle it accordingly
      return res.status(404).json({
        code: 404,
        title: "Not Found",
        message: "No appointment found with the given ID",
      });
    }

    res.status(200).json({
      code: 200,
      title: "Appointment Reschedule",
      message: "Appointment Reschedule successfully",
      data: result,
    });

    try {
    } catch (e) {
      if (e instanceof ThrowError) {
        res.status(e.code).json({
          code: e.code,
          title: e.title,
          message: e.message,
        });
      } else if (e instanceof Error) {
        res.status(500).json({
          code: 500,
          title: e.name,
          message: e.message,
        });
      } else {
        res.status(500).json({
          code: 500,
          title: "Error",
          message: "Internal Server Error",
        });
      }
    }
  };
}
export default DoctorController;
