import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CreditCard,
  Smartphone,
} from "lucide-react";
import upiQR from "../assest/upi-qr.png"; // adjust path as needed

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and
            create something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="project"
                  name="project"
                  rows={5}
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project requirements, timeline, and any specific details..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 px-6 rounded-lg hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information & Payment */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">dharamveerkr774@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 7903797952</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* UPI Payment Section */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CreditCard className="w-6 h-6 mr-3 text-green-600" />
                Quick Payment Options
              </h3>

              <div className="space-y-6">
                {/* UPI ID */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">UPI ID</h4>
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <span className="font-mono text-lg text-gray-700">
                      dharamveerkumar774@oksbi
                    </span>
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(
                          "dharamveerkumar774@oksbi"
                        )
                      }
                      className="text-yellow-600 hover:text-yellow-700 font-medium text-sm"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Smartphone className="w-4 h-4 mr-2" />
                    PhonePe / GPay / Paytm
                  </h4>
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <span className="font-mono text-lg text-gray-700">
                      7903797952
                    </span>
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText("7903797952")
                      }
                      className="text-yellow-600 hover:text-yellow-700 font-medium text-sm"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                {/* QR Code */}
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Scan & Pay
                  </h4>
                  <div className="w-48 h-48 bg-gray-100 rounded-xl mx-auto flex items-center justify-center mb-4 overflow-hidden">
                    <img
                      src={upiQR}
                      alt="UPI QR Code"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    Scan this QR code with any UPI app
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
