'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="mx-auto max-w-md space-y-6 px-4 py-12">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Leave a Review</h2>
        <p className="text-gray-500 dark:text-gray-400">Share your thoughts and experience with us.</p>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="rating">Rating</Label>
          <div className="flex items-center gap-2">
            <HeartIcon className="w-6 h-6 fill-primary" />
            <HeartIcon className="w-6 h-6 fill-primary" />
            <HeartIcon className="w-6 h-6 fill-primary" />
            <HeartIcon className="w-6 h-6 fill-muted stroke-muted-foreground" />
            <HeartIcon className="w-6 h-6 fill-muted stroke-muted-foreground" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="review">Review</Label>
          <Textarea className="min-h-[120px]" id="review" placeholder="Share your thoughts..." />
        </div>
        <Button className="w-full" type="submit">
          Submit Review
        </Button>
      </form>
    </div>
  )
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}