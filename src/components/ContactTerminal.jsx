import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";

const ContactTerminal = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([
    { text: "Welcome to Contact Terminal v1.0", type: "info" },
    { text: "Type your message below to get in touch with Jewel.", type: "info" },
    { text: "─────────────────────────────────────────────────", type: "divider" },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addToTerminal = (text, type = "normal") => {
    setTerminalOutput((prev) => [...prev, { text, type }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!form.name.trim()) {
      addToTerminal("ERROR: Name field is required", "error");
      return;
    }
    if (!form.email.trim()) {
      addToTerminal("ERROR: Email field is required", "error");
      return;
    }
    if (!form.message.trim()) {
      addToTerminal("ERROR: Message field is required", "error");
      return;
    }

    setLoading(true);
    addToTerminal("$ Initializing email transmission...", "command");
    addToTerminal("Connecting to email service...", "loading");

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
          addToTerminal("✓ Message sent successfully!", "success");
          addToTerminal(`✓ From: ${form.name} <${form.email}>`, "success");
          addToTerminal("✓ I'll get back to you as soon as possible.", "success");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          addToTerminal("✗ ERROR: Failed to send message", "error");
          addToTerminal("✗ Please try again or contact directly via email", "error");
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
          <div className="bento-box p-6">
            <div className="font-mono text-blueprint text-xs mb-3 uppercase tracking-wider">
              Email
            </div>
            <a
              href="mailto:jewelnath.me@gmail.com"
              className="font-mono text-white hover:text-blueprint-light transition-colors text-lg"
            >
              jewelnath.me@gmail.com
            </a>
          </div>

          <div className="bento-box p-6">
            <div className="font-mono text-blueprint text-xs mb-3 uppercase tracking-wider">
              Social Links
            </div>
            <div className="space-y-3">
              <a
                href="https://github.com/devjewel01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-mono text-secondary hover:text-blueprint-light transition-colors"
              >
                <span className="text-terminal-green">→</span>
                <span>github.com/devjewel01</span>
              </a>
              <a
                href="https://linkedin.com/in/jewel-nath"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-mono text-secondary hover:text-blueprint-light transition-colors"
              >
                <span className="text-terminal-green">→</span>
                <span>linkedin.com/in/jewel-nath</span>
              </a>
            </div>
          </div>

          <div className="bento-box p-6">
            <div className="font-mono text-blueprint text-xs mb-3 uppercase tracking-wider">
              Location
            </div>
            <div className="font-sans text-secondary">
              Cumilla, Bangladesh
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right side - Terminal Contact Form */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1"
      >
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="ml-3 font-mono text-xs text-secondary">
              contact@jewel-portfolio
            </span>
          </div>

          <div className="p-6">
            {/* Terminal Output */}
            <div className="font-mono text-sm mb-6 space-y-1 max-h-[200px] overflow-y-auto">
              {terminalOutput.map((line, index) => (
                <div
                  key={index}
                  className={`
                    ${line.type === "error" ? "text-red-400" : ""}
                    ${line.type === "success" ? "text-terminal-green" : ""}
                    ${line.type === "command" ? "text-blueprint" : ""}
                    ${line.type === "info" ? "text-secondary" : ""}
                    ${line.type === "loading" ? "text-blueprint/70" : ""}
                    ${line.type === "divider" ? "text-blueprint/30" : ""}
                  `}
                >
                  {line.text}
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="flex items-center gap-2 font-mono text-sm text-secondary mb-2">
                  <span className="text-terminal-green">$</span>
                  <span>--name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-tertiary border border-blueprint/30 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blueprint focus:shadow-terminal transition-all"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="flex items-center gap-2 font-mono text-sm text-secondary mb-2">
                  <span className="text-terminal-green">$</span>
                  <span>--email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-tertiary border border-blueprint/30 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blueprint focus:shadow-terminal transition-all"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="flex items-center gap-2 font-mono text-sm text-secondary mb-2">
                  <span className="text-terminal-green">$</span>
                  <span>--message</span>
                </label>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="w-full bg-tertiary border border-blueprint/30 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blueprint focus:shadow-terminal transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full font-mono text-sm py-3 rounded border transition-all
                  ${
                    loading
                      ? "bg-blueprint/20 border-blueprint/40 text-blueprint/60 cursor-not-allowed"
                      : "bg-blueprint/10 border-blueprint text-blueprint hover:bg-blueprint/20 hover:shadow-blueprint"
                  }
                `}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-pulse">●</span>
                    <span>Sending...</span>
                    <span className="animate-pulse">●</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span>$</span>
                    <span>send_message.sh</span>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactTerminal, "contact");
