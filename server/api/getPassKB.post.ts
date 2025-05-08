// read password from .env file

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const correctPassword = process.env.PASSWORD

  const password = body.password

  if (password === correctPassword) {
    return {
      status: 200,
      body: {
        message: 'Password is correct'
      }
    }
  } else {
    return {
      status: 401,
      body: {
        message: 'Incorrect password'
      }
    }
  }

})
