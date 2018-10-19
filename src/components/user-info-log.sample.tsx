export const UserInfo: StatelessComponent<UserInfoProps> = ({ userName }) => {
  console.log('Rendering user info');

  return <div>Hello, {userName}!</div>;
};
