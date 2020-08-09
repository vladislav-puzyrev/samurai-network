import server from './server'

export const getCaptcha = async () => {
  type CaptchaType = { url: string }

  const res = await server.get<CaptchaType>('security/get-captcha-url')
  return res.data
}
