function ErrorResponseHandler(error) {
    if (error.response) {
        const { status } = error.response;

        if (status == 401) {

        }
    }

    return Promise.reject(error);

}
export default ErrorResponseHandler;