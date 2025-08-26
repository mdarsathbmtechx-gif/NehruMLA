// src/pages/section.jsx
import React, { useRef, useState } from "react";
import jsPDF from "jspdf";

export default function Joinsection() {
  const formRef = useRef();
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => setPhoto(event.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleDownload = () => {
    const doc = new jsPDF("landscape", "pt", [350, 200]); // card size

    const form = formRef.current;
    const name = form.name.value;
    const booth = form.booth.value;
    const phone = form.phone.value;

    // Gradient background simulation (top-left to bottom-right)
    doc.setFillColor(10, 25, 68);
    doc.rect(0, 0, 350, 200, "F"); // base dark blue

    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(255, 255, 255);
    doc.setLineWidth(1);

    // Card container with white inner area
    doc.roundedRect(10, 10, 330, 180, 10, 10, "S");

    // Party title/logo
    doc.setFontSize(16);
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.text("Political Party Member Card", 15, 35);

    // Left side photo circle
    if (photo) {
      doc.addImage(photo, "JPEG", 15, 50, 80, 80); // x, y, w, h
    } else {
      // Placeholder circle
      doc.setDrawColor(255, 255, 255);
      doc.setLineWidth(1.5);
      doc.circle(55, 90, 40, "S");
    }

    // Right side member info
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    doc.text(`Name: ${name}`, 110, 70);
    doc.text(`Booth No: ${booth}`, 110, 100);
    doc.text(`Phone: ${phone}`, 110, 130);

    // Footer / slogan
    doc.setFontSize(10);
    doc.setTextColor(10, 25, 68);
    doc.text("Together for a Stronger Puducherry", 110, 160);

    doc.save("party-member-card.pdf");
  };

  return (
    <div className="min-h-screen px-6 md:px-16 py-20 bg-gray-100">
      <h1 className="text-4xl font-bold text-[#16182F] mb-8">section Our Party</h1>
      <form ref={formRef} className="flex flex-col max-w-md gap-4 bg-white p-6 rounded-xl shadow-lg">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="border p-3 rounded-lg"
        />
        <input
          type="text"
          name="booth"
          placeholder="Booth No"
          className="border p-3 rounded-lg"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="border p-3 rounded-lg"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="border p-2 rounded-lg"
        />
        <button
          type="button"
          onClick={handleDownload}
          className="bg-[#0A1944] text-white px-6 py-3 rounded-lg mt-4 hover:bg-[#142c6a] transition"
        >
          Download Membership Card
        </button>
      </form>
    </div>
  );
}
