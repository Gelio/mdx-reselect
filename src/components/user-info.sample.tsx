import { StatelessComponent } from 'react';

interface UserInfoProps {
  userName: string;
}

export const UserInfo: StatelessComponent<UserInfoProps> = ({ userName }) => (
  <div>Hello, {userName}!</div>
);
