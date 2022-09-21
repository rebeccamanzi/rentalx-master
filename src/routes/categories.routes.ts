/* eslint-disable import/prefer-default-export */
import { Router } from 'express';
import { CategoriesReporitories } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesReporitories = new CategoriesReporitories();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  categoriesReporitories.create({name, description})

  return response.status(201).send();
});

export { categoriesRoutes };
