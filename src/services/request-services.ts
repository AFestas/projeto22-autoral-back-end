import { Requests } from '@prisma/client';
import requestRepositories from '../repositories/request-repository.js';
import bcrypt from 'bcrypt';

export async function postCreateRequest({userId, description, themeId, serviceTypeId}: CreateRequestParams): Promise<Requests> {
  //const hashedPassword = await bcrypt.hash(password, 12);
  return requestRepositories.createRequest({
    userId, 
    description, 
    startDateTime: "2023-06-18T18:19:35.897Z",
    endDateTime: "2023-06-18T18:19:35.897Z",
    themeId, 
    serviceTypeId
  });
}

export type CreateRequestParams = Pick<Requests, 'userId' | 'description' | 'themeId' | 'serviceTypeId'>;

export default {
  postCreateRequest
};