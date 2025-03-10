import React from "react";
import { motion } from "framer-motion";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import { Crown, Lightbulb, Globe, Users } from "lucide-react";

export const leadersData = [
  {
    name: "Punam Jagdish Marathe",
    title: "Directors",
    icon: <Crown className="w-10 h-10 text-blue-500" />,
    image: "user1",
    description:
      "Punam leads Suviam with strategic vision, ensuring long-term growth and innovation.",
  },
  {
    name: "Priyanka Mukund Kale",
    title: "Directors",
    icon: <Lightbulb className="w-10 h-10 text-blue-500" />,
    image: "user2",
    description:
      "Priyanka drives Suviam’s creative initiatives, crafting innovative solutions and brand storytelling.",
  },
  {
    name: "Ajinkya Prakash Patil",
    title: "CEO",
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    image: "user3",
    description:
      "Ajinkya steers Suviam’s operations and strategy, ensuring sustainable business growth.",
  },
  {
    name: "Mayur Prakash Patil",
    title: "Technical and Accounts Advisor",
    icon: <Users className="w-10 h-10 text-blue-500" />,
    image: "user4",
    description:
      "Mayur oversees technical and financial strategies, ensuring efficiency and accuracy.",
  },
  {
    name: "Lalchand Shankar Pawar",
    title: "Manager",
    icon: <Users className="w-10 h-10 text-blue-500" />,
    image: "user5",
    description:
      "Lalchand ensures seamless daily operations, managing resources and team performance.",
  },
];
const VisionaryLeaders = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-container bg-blue-50 py-24 text-gray-700"
    >
      <ContentWrapper>
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-palanquin text-center my-10 text-3xl md:text-4xl font-bold"
        >
          Our
          <span className="bg-gradient-to-r m-2 from-blue-600 to-blue-900 text-transparent bg-clip-text">
            Visionary
          </span>
          Leaders
        </motion.h3>

        <div className="flex justify-center items-center flex-wrap gap-10">
          {leadersData.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col justify-center items-center"
            >
              <motion.img
                alt={leader.name}
                src={leader.image}
                className="w-[120px] h-[120px] rounded-full object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              />
              <h3 className="mt-4 font-palanquin text-xl md:text-2xl text-center font-bold">
                {leader.name}
              </h3>
              <h4 className="mt-1 font-palanquin text-md md:text-lg text-center font-bold">
                {leader.title}
              </h4>
              <p className="info-text text-center md:text-md mt-2 max-w-sm">
                {leader.description}
              </p>
            </motion.div>
          ))}
        </div>
      </ContentWrapper>
    </motion.section>
  );
};

export default VisionaryLeaders;
