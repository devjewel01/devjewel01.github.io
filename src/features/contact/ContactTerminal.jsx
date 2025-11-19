import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { slideIn, fadeIn } from "../../utils/motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactTerminal = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!form.name.trim()) {
      setStatusMessage({ text: "Please enter your name", type: "error" });
      return;
    }
    if (!form.email.trim()) {
      setStatusMessage({ text: "Please enter your email", type: "error" });
      return;
    }
    if (!form.message.trim()) {
      setStatusMessage({ text: "Please enter a message", type: "error" });
      return;
    }

    setLoading(true);
    setStatusMessage({ text: "Sending message...", type: "loading" });

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Jewel Nath",
          from_email: form.email,
          to_email: "jewelnath.me@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatusMessage({
            text: "Message sent successfully! I'll get back to you soon.",
            type: "success"
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });

          // Clear success message after 5 seconds
          setTimeout(() => {
            setStatusMessage({ text: "", type: "" });
          }, 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStatusMessage({
            text: "Failed to send message. Please try again or contact via email.",
            type: "error"
          });
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left side - Info */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-8 space-y-6">
          <div className="glass-card p-6">
            <div className="text-blueprint text-sm mb-3 font-semibold uppercase tracking-wider flex items-center gap-2">
              <FaEnvelope className="text-lg" /> Email
            </div>
            <a
              href="mailto:jewelnath.me@gmail.com"
              className="text-white hover:text-blueprint-light transition-colors text-lg"
            >
              jewelnath.me@gmail.com
            </a>
          </div>

          <div className="glass-card p-6">
            <div className="text-blueprint text-sm mb-3 font-semibold uppercase tracking-wider flex items-center gap-2">
              <FaGithub className="text-lg" /> Social Links
            </div>
            <div className="space-y-3">
              <a
                href="https://github.com/devjewel01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary hover:text-white transition-colors"
              >
                <FaGithub className="text-terminal-green text-xl" />
                <span>github.com/devjewel01</span>
              </a>
              <a
                href="https://linkedin.com/in/jewel-nath"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary hover:text-white transition-colors"
              >
                <FaLinkedin className="text-terminal-green text-xl" />
                <span>linkedin.com/in/jewel-nath</span>
              </a>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="text-blueprint text-sm mb-3 font-semibold uppercase tracking-wider flex items-center gap-2">
              <FaMapMarkerAlt className="text-lg" /> Location
            </div>
            <div className="text-secondary">
              Dhaka, Bangladesh
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right side - Modern Contact Form */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1"
      >
        <div className="glass-card p-8">
          {/* Status Message */}
          {statusMessage.text && (
            <div className={`
              mb-6 p-4 rounded-lg text-sm
              ${statusMessage.type === "error" ? "bg-red-500/10 border border-red-500/30 text-red-400" : ""}
              ${statusMessage.type === "success" ? "bg-terminal-green/10 border border-terminal-green/30 text-terminal-green" : ""}
              ${statusMessage.type === "loading" ? "bg-blueprint/10 border border-blueprint/30 text-blueprint" : ""}
            `}>
              {statusMessage.text}
            </div>
          )}

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm text-secondary mb-2 font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full glass-light rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blueprint transition-all"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm text-secondary mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full glass-light rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blueprint transition-all"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm text-secondary mb-2 font-semibold">
                Message
              </label>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="w-full glass-light rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blueprint transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`
                w-full text-sm py-3 rounded-lg transition-all font-semibold
                ${loading
                  ? "glass-light text-blueprint/60 cursor-not-allowed"
                  : "glass-button text-blueprint hover:shadow-blueprint"
                }
              `}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactTerminal, "contact");
