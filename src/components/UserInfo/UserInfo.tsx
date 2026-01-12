export const UserInfo = ({ user }) =>
  user?.email ? (
    <a href={`mailto:${user.email}`}>{user.name}</a>
  ) : (
    <span>Unknown</span>
  );
