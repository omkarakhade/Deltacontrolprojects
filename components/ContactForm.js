"use client";

import { useState } from "react";
import { company } from "@/data/company";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${company.emails[0]}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white border border-navy-900/10 rounded-sm p-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="text-xs uppercase tracking-wide text-ink/50 block mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border border-navy-900/15 rounded-sm px-3 py-2 text-sm bg-steel-50"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-xs uppercase tracking-wide text-ink/50 block mb-1">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-navy-900/15 rounded-sm px-3 py-2 text-sm bg-steel-50"
            placeholder="+91 ..."
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="text-xs uppercase tracking-wide text-ink/50 block mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border border-navy-900/15 rounded-sm px-3 py-2 text-sm bg-steel-50"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-wide text-ink/50 block mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full border border-navy-900/15 rounded-sm px-3 py-2 text-sm bg-steel-50"
          placeholder="Tell us which machine or application you need help with…"
        />
      </div>
      <button
        type="submit"
        className="bg-accent-500 hover:bg-accent-600 transition-colors text-white font-semibold text-sm uppercase tracking-wide px-6 py-3 rounded-sm"
      >
        Send Enquiry
      </button>
      <p className="text-xs text-ink/40">
        Sending opens your email app addressed to {company.emails[0]}.
      </p>
    </form>
  );
}
