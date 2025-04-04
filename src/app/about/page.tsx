"use client";
import Button from "@/components/Ui/button/Button";
import { useState } from "react";

function page() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setStatus(data.message);
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Submit Your Info</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {status && <p>{status}</p>}
      <Button name="Submit" />
    </main>
  );
}

export default page;
