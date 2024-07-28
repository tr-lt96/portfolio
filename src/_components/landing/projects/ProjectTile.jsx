"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectTile({ item, index }) {
    const { title, description, publicId } = item
    return (
        <Link href={`/project/${publicId}`}>
            <motion.div
                className={"flex flex-col bg-d-dark rounded-2xl p-2 gap-y-2 pb-4 h-fit break-inside-avoid"}
                style={{ rotateY: "90deg" }}
                whileInView={{ rotateY: 0 }}
                transition={{ duration: 0.5, delay: index * 0.25 }}
                viewport={{ once: true }}>
                <h4 className={"text-d-primary font-medium px-2"}>{title}</h4>
                <p className='line-clamp-3 px-2 font-light'>{description}</p>
            </motion.div>
        </Link>
    )
}