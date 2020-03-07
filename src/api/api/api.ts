export * from './basicErrorController.service';
import { BasicErrorControllerService } from './basicErrorController.service';
export * from './goalsController.service';
import { GoalsControllerService } from './goalsController.service';
export * from './messageRestController.service';
import { MessageRestControllerService } from './messageRestController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export const APIS = [BasicErrorControllerService, GoalsControllerService, MessageRestControllerService, UserControllerService];
