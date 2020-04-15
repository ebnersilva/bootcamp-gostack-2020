import { Request, Response } from 'express';

import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Ebner Silva',
    email: 'ebner.suporte@hotmail.com',
    password: '123456',
    techs: [
      'Tech 1',
      'Tech 2',
      { title: 'Javascript', experience: 100 }
    ]
  });

  return response.json({ message: 'Hello World '});
}