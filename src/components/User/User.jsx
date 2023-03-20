import s from "./User.module.css";

const User = ({ avatar }) => {
  console.log(avatar)
  return (
    <div className={s.user}>
      <div className={s.user__wrapper}>
        <img src={`${require(`../../assets/img/${avatar}`)}`} alt="user" className={s.user__img} />
      </div>
    </div>
  );
};

export default User;
