import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import Moment from "react-moment";
import "moment/locale/zh-tw";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Post({ post }) {
  const { data: session } = useSession();
  const [likes, setLikes] = useState([]);
  const [hasliked, setHasLiked] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", post.id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [db]);

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user.uid) !== -1
    );
  }, [likes]);

  async function likePost() {
    if (session) {
      if (hasliked) {
        await deleteDoc(doc(db, "posts", post.id, "likes", session?.user.uid));
      } else {
        await setDoc(doc(db, "posts", post.id, "likes", session?.user.uid), {
          username: session.user.username,
        });
      }
    } else {
      signIn();
    }
  }

  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* user image */}
      <img
        className="h-11 w-11 rounded-full mr-4"
        src={post.data().userImg}
        alt="user-img"
      />

      {/* right side */}
      <div className="">
        {/* Header */}

        <div className="flex justify-between items-center">
          {/* post user info */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[0.9375rem] sm:text-[1rem] hover:underline">
              {post.data().name}
            </h4>
            <span className="text-sm sm:text-[0.9375rem] text-gray-700">
              @{post.data().username} ·{" "}
            </span>
            <span className="text0sm sm:text-[0.9375rem] hover:underline text-gray-700">
              <Moment locale="zh-tw" fromNow>
                {post?.data().timestamp?.toDate()}
              </Moment>
            </span>
          </div>

          {/* dot icon */}
          <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2" />
        </div>

        {/* post text */}

        <p className="text-gray=800 text-[0.9375rem] sm:text-[1rem] mb-2">
          {post.data().text}
        </p>

        {/* post image */}

        <img
          className="rounded-2xl mr-2"
          src={post.data().image}
          alt="post-img"
        />

        {/* icons */}

        <div className="flex justify-between text-gray-500 p-2">
          <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
          <div className="flex items-center">
            {hasliked ? (
              <HeartIconFilled
                onClick={likePost}
                className="h-9 w-9 hoverEffect p-2 text-red-600 hover:bg-red-100"
              />
            ) : (
              <HeartIcon
                onClick={likePost}
                className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
              />
            )}

            {likes.length > 0 && (
              <span
                className={`${hasliked && "text-red-600"} text-sm select-none`}
              >
                {likes.length}
              </span>
            )}
          </div>

          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}
