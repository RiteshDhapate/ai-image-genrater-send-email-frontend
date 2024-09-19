"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loding, setLoding] = useState(false);
  async function sendEmail() {
    try {
      setLoding(true);
      const { data } = await axios.post(
        "https://ai-genrate-image-send-email.onrender.com/send-email",
        {
          email,
          message,
        }
      );
      if (data) {
        alert("email sent successfully");
      }
      setLoding(false);
    } catch (error) {
      alert("error sending email");
      setLoding(false);
    }
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <input
        placeholder="enter email.."
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="border border-green-500"
      />{" "}
      <br />
      <input
        placeholder="Enter message.."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        type="email"
        className="border border-green-500"
      />{" "}
      <br />
      <button
        className="bg-gray-900 p-2 rounded-md text-white"
        onClick={sendEmail}
      >
        send email
      </button>
      <br />
      {loding && <h1>loading...</h1>}
    </div>
  );
}
