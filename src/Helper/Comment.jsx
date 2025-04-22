"use client";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import style from "@/CSS/Comment.module.css";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function Comment({ blogId }) {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", comment: "" });

  useEffect(() => {
    async function loadComments() {
      const res = await fetch(`/api/Comments?blogId=${blogId}`);
      const data = await res.json();
      setComments(data);
    }

    loadComments();

    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
    });

    const channel = pusher.subscribe("comments-channel");
    channel.bind("new-comment", (data) => {
      if (data.blogId === blogId) {
        setComments((prev) => [data.comment, ...prev ]);
      }
    });

    return () => {
      channel.unsubscribe();
      pusher.disconnect();
    };
  }, [blogId]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/Comments", {
      method: "POST",
      body: JSON.stringify({ ...form, blogId }),
    });

    setForm({ name: "", email: "", comment: "" });
  };

  return (
    <div className={style.Newsletter_outerFrame}>
      <div className={style.Subscribe_Section}>
        <h2>Comment</h2>
        <form onSubmit={handleSubmit} className={style.form}>
          <label className={style.label}>Name</label>
          <div className={style.input_container}>
            <FaUser className={style.icon} />
            <input
              className={style.input_field}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Enter your Name"
            />
          </div>

          <label className={style.label}>Email Address</label>
          <div className={style.input_container}>
            <MdEmail className={style.icon} />
            <input
              className={style.input_field}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Enter Email"
            />
          </div>

          <label className={style.label}>Comment</label>
          <textarea
            className={style.textarea}
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
            placeholder="Write here"
          ></textarea>

          <button className={style.Subscribe_button}>Submit</button>
        </form>

        <div>
          {comments.map((c, i) => (
            <div key={i}>
              <p className={style.comment}>
                <strong className={style.commentHead}>{c.name}:</strong>{" "}
                {c.comment}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={style.Newsletter_image}>
        <img src="/comments.svg" alt="Comment image" />
      </div>
    </div>
  );
}

export default Comment;
