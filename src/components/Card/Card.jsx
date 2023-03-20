import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import User from "../User/User";
import s from "./Card.module.css";

const Card = ({ item, setUsers, users }) => {
  const { id, tweets, followers, avatar, isActive } = item;
  return (
    <li className={s.card}>
      <Logo />
      <User avatar={avatar} />
      <div className={s.card__users}>
        <p className={s.card__tweets}>{tweets} Tweets</p>
        <p className={s.card__followers}>
          {followers.toLocaleString("en-US")} Followers
        </p>
              <Button id={id} isActive={isActive} setUsers={setUsers} users={users} />
      </div>
    </li>
  );
};

export default Card;
