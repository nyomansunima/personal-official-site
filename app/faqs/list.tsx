import * as React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'

const faqs = [
  {
    question: 'What types of digital products and services do you offer?',
    answer:
      'As a product designer and full-stack developer, I offer a wide range of digital products and services including custom web applications, mobile apps, e-commerce solutions, SaaS platforms, and digital marketing tools. I excel at crafting intuitive and visually appealing user experiences.',
  },
  {
    question: 'What is your approach to product design and development?',
    answer:
      'My approach is user-centric and iterative. I start by thoroughly understanding the target audience and their pain points. Then I design and develop solutions that address those needs, continuously gathering user feedback to refine the product. I place a strong emphasis on clean code, scalable architecture, and seamless user experiences.',
  },
  {
    question: 'Do you have experience in specific industries or niches?',
    answer:
      "Yes, I have worked with clients across a variety of industries including healthcare, fintech, real estate, and e-commerce. I'm particularly adept at creating digital solutions for small and medium-sized businesses, helping them leverage technology to streamline operations and drive growth.",
  },
  {
    question: 'How do you ensure the quality and security of your work?',
    answer:
      'Quality and security are top priorities for me. I follow industry best practices for software development, including thorough testing, code reviews, and security audits. I also stay up-to-date with the latest technologies and security protocols to ensure my work is robust and reliable.',
  },
  {
    question:
      "Can you provide examples of successful projects you've completed?",
    answer:
      "Absolutely. I'm proud to have delivered numerous successful projects, including a SaaS platform for small businesses, a mobile app for a healthcare provider, and an e-commerce website for a local retailer. I'm happy to share case studies and references upon request.",
  },
  {
    question: 'What is your process for project management and communication?',
    answer:
      "I believe in maintaining clear and transparent communication throughout the project lifecycle. I use agile methodologies to ensure regular progress updates, and I'm always available to address any questions or concerns you may have. I'll work closely with you to understand your goals, establish milestones, and ensure the project stays on track.",
  },
  {
    question: 'Do you offer maintenance and support services?',
    answer:
      'Yes, I provide ongoing maintenance and support services to ensure the long-term success of the products I create. This includes bug fixes, updates, and technical support to address any issues that may arise.',
  },
  {
    question:
      'What is your pricing structure, and can you provide estimates for my project?',
    answer:
      "My pricing is tailored to the specific needs of each project. I'm happy to provide a detailed estimate based on the project scope, timeline, and any additional requirements. I offer flexible pricing models, including fixed-price and hourly rates, to accommodate your budget and preferences.",
  },
  {
    question:
      'Do you collaborate with other professionals, such as designers or marketers?',
    answer:
      "Absolutely. I'm experienced in working with cross-functional teams, including designers, marketers, and subject matter experts. I'm comfortable taking on a lead role or supporting other team members to ensure the successful delivery of a project.",
  },
  {
    question:
      'What sets you apart from other product designers and developers?',
    answer:
      "I bring a unique combination of technical expertise, creative problem-solving, and entrepreneurial experience to every project. I'm passionate about delivering high-quality, user-focused solutions that drive tangible business results. My attention to detail, commitment to continuous learning, and ability to translate complex concepts into intuitive designs sets me apart.",
  },
  {
    question: 'What are your core skills and areas of expertise?',
    answer:
      "My core skills span the full stack of product development, including user research, UI/UX design, front-end and back-end development, and project management. I'm proficient in a wide range of technologies, such as React, Node.js, Ruby on Rails, and AWS. I also have strong design skills, with expertise in tools like Figma, Adobe Creative Cloud, and Sketch. Additionally, I'm well-versed in agile methodologies, data analysis, and digital marketing.",
  },
  {
    question:
      'Can you share your approach to professional development and growth?',
    answer:
      "I'm deeply committed to my own professional growth and development. In addition to my formal education, I've pursued various certifications and specialized training programs to enhance my skills. I also actively seek out mentorship opportunities and engage in peer-to-peer learning to continuously improve my craft. My goal is to not only deliver exceptional work for my clients but to also be a lifelong learner, always striving to expand my knowledge and capabilities.",
  },
]

export function FAQListSection() {
  return (
    <section className="flex py-20 w-10/12 mx-auto">
      <div className="w-full">
        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1 gap-x-10 gap-y-4"
        >
          {faqs.map((item, index) => (
            <FAQItem {...item} position={index + 1} key={index} />
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export function FAQItem({ question, answer, position }) {
  return (
    <AccordionItem value={`item-${position}`} className="col-span-1">
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}
