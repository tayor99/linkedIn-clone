import '../styles/Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';

import { db, colRef, q } from '../firebase';
import {
  collection,
  onSnapshot,
  addDoc,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';

import { useState } from 'react';
import { useEffect } from 'react';

const Feed = () => {
  const [input, setInput] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      name: 'adenusi adetayo',
      description: 'this is a test',
      message: input,
      // photoUrl: '',
      timestamp: serverTimestamp(),
    }).then(() => {
      console.log('success');
    });

    setInput('');
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption Icon={ImageIcon} title="photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="video" color="#efa33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#cbcbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
      {/* Post */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        );
      })}
      {/* <Post
        name="Adenusi Adetayo"
        description="this is a test"
        message="wow this worked"
      /> */}
    </div>
  );
};

export default Feed;
