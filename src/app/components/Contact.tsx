'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // මෙහිදී ඔබට form එක submit කිරීමේ කටයුතු (API call හෝ EmailJS වැනි දේ) එකතු කරගත හැක
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <a href="contact">
            <section id="contact" className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-20 border-t border-zinc-800/60 scroll-mt-36">
                <div className="space-y-12">

                    {/* Section Title */}
                    <div className="space-y-3 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Get In Touch</h2>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            Have a project in mind, a question, or just want to connect? Feel free to reach out.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                        {/* Left Side: Contact Information */}
                        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 lg:p-10 space-y-8 backdrop-blur-sm shadow-xl">
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold text-white">Let's Talk</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-center gap-4 p-4 bg-zinc-900/80 border border-zinc-800/80 rounded-2xl">
                                    <div className="w-12 h-12 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-cyan-300 shrink-0">
                                        <Mail size={22} stroke="#67e8f9" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-400 font-medium">Email Me</p>
                                        <p className="text-sm font-semibold text-white">erandihansika@gmail.com</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-4 p-4 bg-zinc-900/80 border border-zinc-800/80 rounded-2xl">
                                    <div className="w-12 h-12 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-cyan-300 shrink-0">
                                        <Phone size={22} stroke="#67e8f9" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-400 font-medium">Call Me</p>
                                        <p className="text-sm font-semibold text-white">+94 XX XXX XXXX</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-4 p-4 bg-zinc-900/80 border border-zinc-800/80 rounded-2xl">
                                    <div className="w-12 h-12 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-cyan-300 shrink-0">
                                        <MapPin size={22} stroke="#67e8f9" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-400 font-medium">Location</p>
                                        <p className="text-sm font-semibold text-white">Sri Lanka</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 lg:p-10 backdrop-blur-sm shadow-xl">
                            {isSubmitted ? (
                                <div className="py-16 text-center space-y-4">
                                    <div className="w-16 h-16 bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                                    <p className="text-zinc-400 text-sm max-w-sm mx-auto">
                                        Thank you for reaching out. I will get back to you as soon as possible.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                                        <p className="text-zinc-400 text-sm">Fill out the form below and I'll respond promptly.</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-medium text-zinc-300 mb-1.5">Your Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 text-sm transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-zinc-300 mb-1.5">Your Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 text-sm transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-zinc-300 mb-1.5">Your Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={4}
                                                placeholder="Write your message here..."
                                                className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 text-sm transition-all resize-none"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 px-6 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer text-sm"
                                    >
                                        <Send size={18} /> Send Message
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </section>
        </a>
    );
}