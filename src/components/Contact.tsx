// components/Contact.tsx
"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CreditCard,
  Smartphone,
  CheckCircle,
  Loader2,
} from "lucide-react";
import upiQR from "../assest/upi-qr.png";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/dharamveerkr774@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.project,
          _subject: `New Project Inquiry from ${formData.name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", project: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Send Me a Message
            </h3>

            {status === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700">
                <CheckCircle className="w-5 h-5 flex-shrink-0 rotate-45" />
                <p className="text-sm">Oops! Something went wrong. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Project Details *
                </label>
                <textarea
                  id="project"
                  name="project"
                  rows={5}
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell me about your project requirements, timeline, and budget..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-900 font-semibold py-3.5 px-6 rounded-lg hover:from-yellow-300 hover:to-amber-300 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-yellow-500/20"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Payment */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:dharamveerkr774@gmail.com" className="text-gray-600 hover:text-yellow-600 transition-colors">
                      dharamveerkr774@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone / WhatsApp</p>
                    <a href="tel:+917903797952" className="text-gray-600 hover:text-yellow-600 transition-colors">
                      +91 7903797952
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Patna, Bihar, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* UPI Payment Section */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 md:p-8 border border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-green-600" />
                Quick Payment
              </h3>

              <div className="space-y-4">
                {/* UPI ID */}
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <p className="text-xs font-medium text-gray-500 mb-2">UPI ID</p>
                  <div className="flex items-center justify-between gap-2">
                    <code className="text-sm text-gray-700 font-mono">dharamveerkumar774@oksbi</code>
                    <button
                      onClick={() => navigator.clipboard.writeText("dharamveerkumar774@oksbi")}
                      className="text-xs font-medium text-yellow-600 hover:text-yellow-700 px-3 py-1.5 bg-yellow-50 rounded-lg transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <p className="text-xs font-medium text-gray-500 mb-2">PhonePe / GPay / Paytm</p>
                  <div className="flex items-center justify-between gap-2">
                    <code className="text-sm text-gray-700 font-mono">7903797952</code>
                    <button
                      onClick={() => navigator.clipboard.writeText("7903797952")}
                      className="text-xs font-medium text-yellow-600 hover:text-yellow-700 px-3 py-1.5 bg-yellow-50 rounded-lg transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                {/* QR Code */}
                {upiQR && (
                  <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                    <p className="text-xs font-medium text-gray-500 mb-3">Scan to Pay</p>
                    <div className="w-40 h-40 bg-gray-100 rounded-lg mx-auto overflow-hidden">
                      <img
                        src={upiQR}
                        alt="UPI QR Code"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-3">Scan with any UPI app</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;