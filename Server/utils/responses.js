exports.createSuccessResponse = (data) => ({
    success: true,
    response: data
});

exports.createErrorResponse = (error) => ({
    success: false,
    error
});
