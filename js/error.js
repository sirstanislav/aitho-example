class ThrowUrlError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ThrowUrlError';
    this.statusCode = 500;
  }
}