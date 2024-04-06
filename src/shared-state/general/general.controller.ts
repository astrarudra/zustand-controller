

export interface IGeneralController {
    initilize: () => void;
}

export const generalController: IGeneralController = {
    initilize: () => {
        console.log("General Controller Initialized");
    }
}
  