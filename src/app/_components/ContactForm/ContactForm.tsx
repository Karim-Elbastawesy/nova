"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const reasons = ["General Inquiry", "Reservations", "Press", "Feedback"];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("company")) {
      setStatus("success");
      form.reset();
      return;
    }

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    if (!emailPattern.test(email)) {
      setStatus("error");
      setErrorMessage("That email address doesn't look right.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          reason: formData.get("reason"),
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong on our end. Please try again or email us directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[#D4AF37]/40 bg-[#D4AF37]/5 px-8 py-10">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">
          Message Sent
        </p>

        <p className="mt-4 text-sm leading-7 text-white/60">
          Thank you for reaching out. We read every message and typically
          reply within 24 hours.
        </p>

        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[10px] uppercase tracking-[0.25em] text-white/50 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-sm text-white outline-none transition-colors focus:border-[#D4AF37]"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-sm text-white outline-none transition-colors focus:border-[#D4AF37]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="reason" className="text-[10px] uppercase tracking-[0.25em] text-white/40">
          Reason
        </label>

        <select
          id="reason"
          name="reason"
          defaultValue={reasons[0]}
          className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-sm text-white outline-none transition-colors focus:border-[#D4AF37]"
        >
          {reasons.map((reason) => (
            <option key={reason} value={reason} className="bg-[#0b0a08]">
              {reason}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-[10px] uppercase tracking-[0.25em] text-white/40">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-3 w-full resize-none border-b border-white/15 bg-transparent pb-3 text-sm text-white outline-none transition-colors focus:border-[#D4AF37]"
        />
      </div>

      {status === "error" && <p className="text-xs text-[#e0a458]">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group relative inline-flex items-center overflow-hidden border border-[#D4AF37]/70 px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37] transition-colors duration-300 hover:text-black disabled:opacity-50"
      >
        <span className="absolute inset-0 -translate-x-full bg-[#D4AF37] transition-transform duration-300 group-hover:translate-x-0" />

        <span className="relative">{status === "loading" ? "Sending..." : "Send Message"}</span>
      </button>
    </form>
  );
}