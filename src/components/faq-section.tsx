"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What is Nano Banana?",
      answer: "Nano Banana is an advanced AI image editor that uses natural language processing to edit images through simple text prompts. It outperforms Flux Kontext in character consistency and scene preservation."
    },
    {
      question: "How does it work?",
      answer: "Simply upload an image and describe the changes you want using natural language. Our AI model understands your instructions and applies edits while maintaining character consistency and scene quality."
    },
    {
      question: "How is it better than Flux Kontext?",
      answer: "Nano Banana excels in one-shot editing, character consistency, and scene preservation. It delivers superior results with better understanding of natural language prompts and maintains quality across different image types."
    },
    {
      question: "Can I use it for commercial projects?",
      answer: "Yes, Nano Banana can be used for commercial projects including UGC content creation, AI influencer development, and marketing campaigns. Check our terms of service for specific usage guidelines."
    },
    {
      question: "What types of edits can it handle?",
      answer: "Nano Banana can handle a wide range of edits including character modifications, background changes, style transfers, object additions/removals, and complex scene compositions while maintaining natural-looking results."
    },
    {
      question: "Where can I try Nano Banana?",
      answer: "You can try Nano Banana right here on our website using the generator section above, or access the full generator interface for more advanced features and options."
    }
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">FAQs</h2>
          <p className="text-xl text-muted-foreground">Frequently Asked Questions</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-muted-foreground"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
} 