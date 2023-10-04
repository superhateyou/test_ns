import TUser from '../types/types';

const URL = 'https://jsonplaceholder.typicode.com/users';

const receiveRandomUser = async (randomId: number): Promise<TUser> => {
  const user = (await fetch(`${URL}/${randomId}`).then(response => response.json())) as TUser;

  return user;
};

export default receiveRandomUser;
