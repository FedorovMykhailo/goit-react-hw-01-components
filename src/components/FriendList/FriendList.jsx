
import clsx from "clsx";
import css from "./FriendList.module.css";

const FriendList = ( {friends} ) => (
    <ul className={css.friendlist}>
        {friends.map(({avatar,name,isOnline,id}) => (
            <li key={id} className={css.item}>
                <span className= {clsx(isOnline ? css.online:css.notOnline)}></span>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={css.avatar} />
                <p className={css.name}>{name}</p></li>
  ))}
</ul>
)

export default FriendList
