import { withSentry } from '@sentry/nextjs';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const handler = async function handler(request: NextApiRequest, response: NextApiResponse<Data>) {
  response.status(200).json({ name: 'John Doe' });
};

export default withSentry(handler);
