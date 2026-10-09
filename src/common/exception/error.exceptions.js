import { env } from "../../config/env.service";

export const ErrorResponse =({

    statusCode = 400,
    message = "Bad Request",
    extra = undefined
    
} = {} ) =>{

throw new Error(message, {cause: {statusCode, extra}});
}

export const BadRequestError = (message = "Bad Request", extra = undefined) => {
 return ErrorResponse({ statusCode: 400, message: message, extra: extra });
};