import PropTypes from 'prop-types';
import clsx from "clsx";
import css from "./FriendList.module.css";

const FriendList = ( {friends} ) => (
    <ul className={css.friendlist}>
        {friends.map(({avatar,name,isOnline,id}) => (
            (<FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />)))}
    </ul>
)

const FriendListItem = ( {avatar,name,isOnline,id} ) => (    
            <li  className={css.item}>
                <span className= {clsx(isOnline ? css.online:css.notOnline)}></span>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={css.avatar} />
                <p className={css.name}>{name}</p>
            </li>
  )


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired}))
    
}

FriendListItem.propTypes = {
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
       
}

export default FriendList
