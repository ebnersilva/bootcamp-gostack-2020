import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };

  return response.json({ message: 'Hello Go Stack' });
});

export default routes;
