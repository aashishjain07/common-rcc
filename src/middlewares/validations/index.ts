const HEADER_CODE = 400;
const STATUS_CODE = 400;

export const validationResponse = (res, error) => {
    return res.status(HEADER_CODE).send({
        message: error.details[0].message.replace(/"/g, ''),
        statusCode: STATUS_CODE,
        success: false,
        key: error.details[0].context.key
    });
}