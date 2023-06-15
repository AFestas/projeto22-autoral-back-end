import { User } from '@prisma/client';
import depositionRepositories from '../repositories/deposition-repository.js';

async function getAllDepositions() {
    return await depositionRepositories.getAll();
}

async function getSomeDeposition() {
  const someDepositions = await depositionRepositories.getAll();
  return someDepositions.slice(0, 2);
}

export default {
  getAllDepositions,
  getSomeDeposition
};