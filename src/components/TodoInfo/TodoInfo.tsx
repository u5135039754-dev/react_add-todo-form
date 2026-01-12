import { Todo } from '../../types/todo';
import { User } from '../../types/user';
import { UserInfo } from '../UserInfo';
type Props = {
  users: User[];
  todo: Todo;
};
export const TodoInfo: React.FC<Props> = ({ users, todo }) => {
  const user = users.find(({ id }) => id === todo.userId);

  return (
    <article data-id={todo.id}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={user} />
    </article>
  );
};
