import React from "react";

function Contact() {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-lg shadow">

        <h2 className="text-3xl font-semibold mb-10">
          Contact Support
        </h2>

        <form className="space-y-6">

          <Input label="Library Name/Account Number*" />
          <Input label="Your Name*" />
          <Input label="Your Email Address*" type="email" />
          <Input label="Subject*" />

          <Select
            label="Category*"
            options={[
              "Account/Admin",
              "Technical Issue",
              "General Question"
            ]}
          />

          <Select
            label="Device Type (If Applicable)"
            options={[
              "iPad",
              "Android",
              "Desktop",
              "Other"
            ]}
          />

          <Select
            label="Format (If Applicable)"
            options={[
              "Boundless Audiobook",
              "eBook",
              "Other"
            ]}
          />

          <Select
            label="Browser (If Applicable)"
            options={[
              "Chrome",
              "Safari",
              "Edge",
              "Firefox"
            ]}
          />

          <Input label="Patron Information (If Applicable) i.e. Barcode and Pin" />
          <Input label="Title Information (If Applicable) i.e. ISBN and title" />

          <div>
            <label className="block text-sm mb-2">
              Details*
            </label>
            <textarea
              rows="6"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Please describe your issue in detail..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          >
            Submit Form
          </button>

        </form>
      </div>
    </div>
  );
}

/* ---------------- HELPER COMPONENTS ---------------- */

function Input({ label, type = "text" }) {
  return (
    <div>
      <label className="block text-sm mb-2">
        {label}
      </label>
      <input
        type={type}
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div>
      <label className="block text-sm mb-2">
        {label}
      </label>
      <select className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500">
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Contact;
