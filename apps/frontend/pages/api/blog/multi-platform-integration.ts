import contentService from '@lib/services/content-service'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body
  // await contentService.multiPlatformBlogIntegration(body)

  // return to result `OK`
  res.status(201).json({
    message: 'Success',
  })
}

export const config = {
  api: {
    externalResolver: true,
    responseLimit: false,
  },
}
