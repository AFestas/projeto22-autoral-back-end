import galeryRepositories from '../repositories/galery-repository.js';

async function getAllGalery() {
    return await galeryRepositories.getAll();
}

export default {
  getAllGalery,
};