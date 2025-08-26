import React, { useRef } from "react";
import jsPDF from "jspdf";

export default function Join() {
  const formRef = useRef();

  const handleDownload = () => {
    const doc = new jsPDF();
    const form = formRef.current;

    doc.text("Form Submission", 10, 10);
    doc.text(`Name: ${form.name.value}`, 10, 20);
    doc.text(`Email: ${form.email.value}`, 10, 30);
    doc.text(`Phone: ${form.phone.value}`, 10, 40);
    doc.save("form-submission.pdf");
  };

  return (
    <div className="min-h-screen px-6 md:px-16 py-20">
      <h1 className="text-4xl font-bold text-[#16182F] mb-6">Join Us</h1>
      <form ref={formRef} className="flex flex-col max-w-lg gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="border p-3 rounded-lg"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="border p-3 rounded-lg"
        />
        <button
          type="button"
          onClick={handleDownload}
          className="bg-[#0A1944] text-white px-6 py-3 rounded-lg mt-4 hover:bg-[#142c6a] transition"
        >
          Download PDF
        </button>
      </form>
    </div>
  );
}
