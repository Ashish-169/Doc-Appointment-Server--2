import express from "express";
import DoctorController from "./controller";

export const doctor_route = express.Router();

doctor_route.post("/user-login", DoctorController.loginUserController);

doctor_route.post("/user-register", DoctorController.registerUserController); //User Controll

doctor_route.post(
  "/get-appointment",
  DoctorController.getAllAppointmentController
);

doctor_route.post("/delete", DoctorController.deleteAppointmentController); //User Controll

doctor_route.post(
  "/add-appointment",
  DoctorController.addAppointmentController
); //User Controll

doctor_route.post("/reschedule",DoctorController.rescheduleAppointmentController)
