// Override the .env filename with ENV_FILENAME env var

module.exports = () => (
  process.env.ENV_FILENAME
    ? process.env.ENV_FILENAME
    : '.env'
)
