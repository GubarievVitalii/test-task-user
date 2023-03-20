import s from "./Button.module.css";

const Button = ({ id, isActive, setUsers, users }) => {
  const buttonHandler = () => {
    const newArrayOfUsers = users.map((item) =>
      item.id === id
        ? {
            ...item,
            isActive: !isActive,
            followers: isActive ? item.followers - 1 : item.followers + 1,
          }
        : { ...item }
      );
      setUsers(newArrayOfUsers);
  };
  return (
    <button
      onClick={buttonHandler}
      className={isActive ? s.buttonActive : s.buttonNotActive}
    >
      {isActive ? "Following" : "Follow"}
    </button>
  );
};

export default Button;
