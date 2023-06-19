import typeServiceRepositories from '../repositories/typeService-repository.js';

async function getAllTypeService() {
    return await typeServiceRepositories.getAll();
}

export default {
  getAllTypeService,
};