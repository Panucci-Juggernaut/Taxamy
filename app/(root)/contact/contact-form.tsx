"use client"
import * as Form from "@radix-ui/react-form"
import * as Label from "@radix-ui/react-label"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [inquiry, setInquiry] = useState("")
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Handle submit
    console.log({ name, email, inquiry })

    // Reset form
    setName("")
    setEmail("")
    setInquiry("")
  }

  return (
    <Form.Root
      className="max-w-lg mx-auto p-6 mt-8 mb-16 space-y-6 bg-card text-card-foreground rounded-lg border border-border shadow-sm"
    >     
      <Form.Field name="name" className="space-y-2">
        <div className="flex justify-between">
          <Label.Root
            htmlFor="name"
            className="text-sm font-medium"
          >
            Name
          </Label.Root>
        </div>

        <Form.Control asChild>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              w-full rounded-md border border-input bg-background
              px-4 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring
              transition
            "
            placeholder="Please input full name"
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Field name="email" className="space-y-2">
        <Label.Root
          htmlFor="email"
          className="text-sm font-medium"
        >
          Email
        </Label.Root>

        <Form.Control asChild>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full rounded-md border border-input bg-background
              px-4 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring
              transition
            "
            placeholder="Please input valid email"
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Field name="inquiry" className="space-y-2">
        <Label.Root
          htmlFor="inquiry"
          className="text-sm font-medium"
        >
          Inquiry
        </Label.Root>

        <Form.Control asChild>
          <textarea
            id="inquiry"
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
            rows={4}
            className="
              w-full rounded-md border border-input bg-background
              px-4 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring
              resize-none transition
            "
            placeholder="Please input your inquiries"
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <Button
          type="submit"
          className="w-full"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form.Submit>
    </Form.Root>
  )
}

export default ContactForm
