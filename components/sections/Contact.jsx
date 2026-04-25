"use client"

import { useFormik } from "formik";
import { contactSchema } from "../../app/Schema";
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

const ROUTE_TRANSITION_DELAY = 1.6;

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delay: ROUTE_TRANSITION_DELAY,
            staggerChildren: 0.24,
            when: "beforeChildren",
        },
    },
};

const sectionVariants = {
    hidden: { opacity: 0, y: 26 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const infoListVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.1,
        },
    },
};

const infoItemVariants = {
    hidden: { opacity: 0, x: 18 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.35,
            ease: "easeOut",
        },
    },
};

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
            console.log(values, '-----------------values')
            setLoading(true);
            try {
                const formEl = form.current;
                console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, '-----------------formEl')
                // await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formEl, {
                //     publicKey: PUBLIC_KEY,
                // });
                await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                    name: `${values.firstName} ${values.lastName}`,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    phone: values.phone,
                    service: values.service,
                    message: values.message,
                }, PUBLIC_KEY);

                toast.success("Your Message is Sent!");
                resetForm();
            } catch (error) {
                console.log(error, '-----------error message');
                toast.error("Something went wrong!");
            } finally {
                setLoading(false);
            }
        }
    });

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="py-4 xl:py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 items-center justify-center">
                    {/* Form */}
                    <motion.div suppressHydrationWarning data-aos="fade-right" data-aos-duration="1000" variants={sectionVariants} className="flex flex-1 items-center justify-center w-full min-w-0 xl:w-[54%] order-2 xl:order-0">
                        <form ref={form} onSubmit={handleSubmit} className="flex w-full min-w-0 max-w-full flex-col gap-4 bg-[#27272c] rounded-xl xl:p-8 p-4">
                            <h3 className="text-[clamp(1.125rem,2.5vw+0.65rem,1.875rem)] text-accent text-center xl:text-left leading-tight">Let's work together</h3>
                            <p className="text-white/60 text-[clamp(0.75rem,1.1vw+0.6rem,0.875rem)] text-center xl:text-left leading-snug">Send me a message, and I’ll get back to you soon.</p>
                            <div className="grid w-full min-w-0 grid-cols-1 gap-4 md:grid-cols-[repeat(2,minmax(0,1fr))]">
                                <div className="w-full min-w-0">
                                    <Input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        className="h-11 w-full min-w-0 px-3 py-2 text-[clamp(0.75rem,0.9vw+0.65rem,0.875rem)]"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.firstName && touched.firstName && (
                                        <p className="text-red-500 text-[clamp(0.6875rem,0.8vw+0.55rem,0.8125rem)] mt-1">{errors.firstName}</p>
                                    )}
                                </div>
                                <div className="w-full min-w-0">
                                    <Input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className="h-11 w-full min-w-0 px-3 py-2 text-[clamp(0.75rem,0.9vw+0.65rem,0.875rem)]"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.lastName && touched.lastName && (
                                        <p className="text-red-500 text-[clamp(0.6875rem,0.8vw+0.55rem,0.8125rem)] mt-1">{errors.lastName}</p>
                                    )}
                                </div>
                                <div className="w-full min-w-0">
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Email address"
                                        className="h-11 w-full min-w-0 px-3 py-2 text-[clamp(0.75rem,0.9vw+0.65rem,0.875rem)]"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email && (
                                        <p className="text-red-500 text-[clamp(0.6875rem,0.8vw+0.55rem,0.8125rem)] mt-1">{errors.email}</p>
                                    )}
                                </div>
                                <div className="w-full min-w-0">
                                    <Input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone number"
                                        className="h-11 w-full min-w-0 px-3 py-2 text-[clamp(0.75rem,0.9vw+0.65rem,0.875rem)]"
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.phone && touched.phone && (
                                        <p className="text-red-500 text-[clamp(0.6875rem,0.8vw+0.55rem,0.8125rem)] mt-1">{errors.phone}</p>
                                    )}
                                </div>
                            </div>

                            <Select
                                value={values.service}
                                onValueChange={(val) => setFieldValue("service", val)}
                            >
                                <SelectTrigger className="h-11 w-full min-w-0 px-3 py-2 text-[clamp(0.75rem,0.9vw+0.65rem,0.875rem)]">
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
                                <p className="text-red-500 text-[clamp(0.6875rem,0.8vw+0.55rem,0.8125rem)] mt-1">{errors.service}</p>
                            )}

                            <div className="w-full min-w-0">
                                <Textarea
                                    name="message"
                                    placeholder="Type your message here."
                                    className="h-[clamp(6.5rem,22vw,8.125rem)] min-h-26 w-full min-w-0 px-3 py-2 text-[clamp(0.75rem,0.9vw+0.65rem,0.875rem)]"
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.message && touched.message && (
                                    <p className="text-red-500 text-[clamp(0.6875rem,0.8vw+0.55rem,0.8125rem)] mt-1">{errors.message}</p>
                                )}
                            </div>

                            <Button type="submit" disabled={loading} className="max-w-36 h-10 text-[clamp(0.75rem,0.9vw+0.65rem,0.875rem)]">
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div suppressHydrationWarning data-aos="fade-left" data-aos-duration="1000" variants={sectionVariants} className="flex flex-1 items-center justify-center order-1 xl:order-0 mb-8 xl:mb-0 w-full min-w-0 px-1 ">
                        <div>
                            <motion.ul variants={infoListVariants} className="flex flex-col gap-[clamp(1.25rem,4vw,2rem)] w-full max-w-full">
                                {info.map((item, i) => (
                                    <motion.li variants={infoItemVariants} key={i} className="flex items-center justify-center gap-[clamp(0.75rem,2.5vw,1rem)] text-center xl:text-left w-full min-w-0">
                                        <div className="shrink-0 w-[clamp(2.75rem,10vw,4.5rem)] h-[clamp(2.75rem,10vw,4.5rem)] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[clamp(1.125rem,3.5vw+0.35rem,1.75rem)]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-white/60 text-[clamp(0.6875rem,1vw+0.55rem,0.875rem)]">{item.title}</p>
                                            <h3 className="text-[clamp(0.875rem,1.8vw+0.55rem,1.25rem)] font-semibold leading-snug wrap-break-word">{item.description}</h3>
                                        </div>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
