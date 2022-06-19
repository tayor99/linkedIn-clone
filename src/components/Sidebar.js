import { Avatar } from '@material-ui/core';
import '../styles/Sidebar.css';

function Sidebar() {
  const recentItems = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://pbs.twimg.com/profile_banners/730973701806665728/1614801657/1500x500"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Tayo Adenusi</h2>
        <h4>adenusiadetayo@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems('programming')}
        {recentItems('Web development')}
        {recentItems('Coding')}
        {recentItems('React js')}
        {recentItems('Javascript')}
      </div>
    </div>
  );
}

export default Sidebar;
