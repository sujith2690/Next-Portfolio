"use client"

import { useFormik } from "formik";
import { contactSchema } from "../Schema";
import emailjs from '@emailjs/browser';
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;


const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+91 6238 444 374"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "sujithworks369@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "India, Kerala, Kozhikode"
    }
];

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, resetForm } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            service: "",
            message: ""
        },
        validationSchema: contactSchema,
        onSubmit: async (values) => {
            console.log(values,'-----------------values')
            setLoading(true);
            try {
                const formEl = form.current;
                await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formEl, {
                    publicKey: PUBLIC_KEY,
                });
                toast.success("Your Message is Sent!", { position: "top-right" });
                resetForm();
            } catch (error) {
                toast.error("Something went wrong!");
                console.error(error.message,'-----------error message');
            } finally {
                setLoading(false);
            }
        }
    });

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.6, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form ref={form}  onSubmit={handleSubmit} className="flex flex-col gap-6 bg-[#27272c] rounded-xl xl:p-10 p-5">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">Send me a message, and I’ll get back to you soon.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <Input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.firstName && touched.firstName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                                    )}
                                </div>
                                <div>
                                    <Input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.lastName && touched.lastName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                                    )}
                                </div>
                                <div>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Email address"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <Input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone number"
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.phone && touched.phone && (
                                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                    )}
                                </div>
                            </div>

                            <Select
                                value={values.service}
                                onValueChange={(val) => setFieldValue("service", val)}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a Service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a Service</SelectLabel>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                                        <SelectItem value="Logo Design">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {errors.service && touched.service && (
                                <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                            )}

                            <div>
                                <Textarea
                                    name="message"
                                    placeholder="Type your message here."
                                    className="h-[200px]"
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.message && touched.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                )}
                            </div>

                            <Button type="submit" disabled={loading} size="40" className="max-w-40 px-2 py-2">
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, i) => (
                                <li key={i} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
