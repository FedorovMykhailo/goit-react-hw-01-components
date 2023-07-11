import PropTypes from 'prop-types';
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

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    })).isRequired
}

export default FriendList
