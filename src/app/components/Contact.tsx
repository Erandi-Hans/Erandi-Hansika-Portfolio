'use client';
import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');

        if (formRef.current) {
            //  (Notification to you)
            const sendNotification = emailjs.sendForm(
                'service_r0gteng',
                'template_ipp26e6',
                formRef.current,
                '298bmylPAcVcmVYRC'
            );

            //  (Auto-reply to user)
            const sendAutoReply = emailjs.sendForm(
                'service_r0gteng',
                'template_xfxrl79',
                formRef.current,
                '298bmylPAcVcmVYRC'
            );

            Promise.all([sendNotification, sendAutoReply])
                .then(() => {
                    setIsSubmitted(true);
                    setIsLoading(false);
                    if (formRef.current) formRef.current.reset();
                    setTimeout(() => setIsSubmitted(false), 5000);
                })
                .catch((error) => {
                    console.log(error);
                    setIsLoading(false);
                    setErrorMessage('Failed to send message. Please try again later.');
                });
        }
    };

    return (

        <section id="contact" className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-20 border-t border-zinc-800/60 scroll-mt-36">
            <div className="space-y-12">

                {/* Section Title */}
                <div className="space-y-3 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Get In Touch</h2>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
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

                        <div className="space-y-5">
                            {/* Address */}
                            <div className="flex items-center gap-4 p-4 bg-zinc-900/80 border border-zinc-800/80 rounded-2xl">
                                <div className="w-12 h-12 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-cyan-300 shrink-0">
                                    <MapPin size={22} stroke="#67e8f9" />
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-xs text-zinc-400 font-medium">Address</p>
                                    <p className="text-sm font-semibold text-white break-words">No 135/1, Mahagalkadawala, Galgamuwa</p>
                                </div>
                            </div>

                            {/* Email */}
                            <a
                                href="mailto:erandi2287hansika@gmail.com"
                                className="flex items-center gap-4 p-4 bg-zinc-900/80 border border-zinc-800/80 hover:border-cyan-500/50 rounded-2xl transition-all group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-cyan-300 shrink-0">
                                    <Mail size={22} stroke="#67e8f9" />
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-xs text-zinc-400 font-medium">Email Me</p>
                                    <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors break-all">erandi2287hansika@gmail.com</p>
                                </div>
                            </a>

                            {/* Normal Call */}
                            <a
                                href="tel:+94785059129"
                                className="flex items-center gap-4 p-4 bg-zinc-900/80 border border-zinc-800/80 hover:border-cyan-500/50 rounded-2xl transition-all group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-cyan-300 shrink-0">
                                    <Phone size={22} stroke="#67e8f9" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-400 font-medium">Normal Call</p>
                                    <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">+94 78 505 9129</p>
                                </div>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/94760709264"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-zinc-900/80 border border-zinc-800/80 hover:border-emerald-500/50 rounded-2xl transition-all group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center text-emerald-400 shrink-0">
                                    <MessageSquare size={22} stroke="#34d399" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-400 font-medium">WhatsApp</p>
                                    <p className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">+94 76 070 9264</p>
                                </div>
                            </a>
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
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                                    <p className="text-zinc-400 text-sm">Fill out the form below and I'll respond promptly.</p>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-medium text-zinc-300 mb-1.5">Your Name</label>
                                        <input
                                            type="text"
                                            name="from_name"
                                            required
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 text-sm transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-zinc-300 mb-1.5">Your Email</label>
                                        <input
                                            type="email"
                                            name="from_email"
                                            required
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 text-sm transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-zinc-300 mb-1.5">Your Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={4}
                                            placeholder="Write your message here..."
                                            className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/60 text-sm transition-all resize-none"
                                        />
                                    </div>
                                </div>

                                {errorMessage && (
                                    <p className="text-xs text-rose-400">{errorMessage}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-4 px-6 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer text-sm disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            <Send size={18} /> Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>

    );
}