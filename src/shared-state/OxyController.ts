import { generalController, IGeneralController } from "./general/general.controller"

export interface IOxyController extends IGeneralController {
    controllerName: string;
}

export const OxyController: IOxyController = { 
  ...generalController,
  controllerName: "OxyController"
};