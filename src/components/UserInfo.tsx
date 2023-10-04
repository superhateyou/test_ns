import { useMemo, memo } from 'react';

import TUser from '../types/types';

interface IUserInfoProps {
  user: Record<number, TUser> | null;
}

function UserInfo({ user }: IUserInfoProps): JSX.Element | null {
  const usersData = useMemo(() => (user ? Object.values(user) : null), [user]);

  if (!user) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Phone number</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {usersData?.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default memo(UserInfo);
