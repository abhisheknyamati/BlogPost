import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function cards() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <cards>
          <CardContent className="space-y-2">
            <h3 className="text-lg font-semibold">Card Title</h3>
            <p className="text-muted-foreground">
              This is a description of the card content.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Avatar className="w-6 h-6 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>@username</span>
            </div>
          </CardContent>
        </cards>
        <cards>
          <CardContent className="space-y-2">
            <h3 className="text-lg font-semibold">Card Title</h3>
            <p className="text-muted-foreground">
              This is a description of the card content.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Avatar className="w-6 h-6 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>@username</span>
            </div>
          </CardContent>
        </cards>
        <cards>
          <CardContent className="space-y-2">
            <h3 className="text-lg font-semibold">Card Title</h3>
            <p className="text-muted-foreground">
              This is a description of the card content.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Avatar className="w-6 h-6 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>@username</span>
            </div>
          </CardContent>
        </cards>
        <cards>
          <CardContent className="space-y-2">
            <h3 className="text-lg font-semibold">Card Title</h3>
            <p className="text-muted-foreground">
              This is a description of the card content.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Avatar className="w-6 h-6 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>@username</span>
            </div>
          </CardContent>
        </cards>
        <cards>
          <CardContent className="space-y-2">
            <h3 className="text-lg font-semibold">Card Title</h3>
            <p className="text-muted-foreground">
              This is a description of the card content.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Avatar className="w-6 h-6 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>@username</span>
            </div>
          </CardContent>
        </cards>
        <cards>
          <CardContent className="space-y-2">
            <h3 className="text-lg font-semibold">Card Title</h3>
            <p className="text-muted-foreground">
              This is a description of the card content.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Avatar className="w-6 h-6 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>@username</span>
            </div>
          </CardContent>
        </cards>
      </div>
      <div className="fixed bottom-8 right-8">
        <Button
          variant="circle"
          size="lg"
          onClick={() => setShowForm(!showForm)}
          className={`transition-all ${
            showForm
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted-foreground hover:text-muted"
          }`}
        >
          {showForm ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <PlusIcon className="w-6 h-6" />
          )}
        </Button>
      </div>
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <Card className="w-full max-w-md p-6 relative">
            <div className="absolute top-4 right-4">
              <Button
                variant="ghost"
                className="ml-auto"
                onClick={() => setShowForm(false)}
              >
                <XIcon className="w-6 h-6" />
              </Button>
            </div>
            <CardHeader>
              <CardTitle>Create New Card</CardTitle>
              <CardDescription>
                Fill out the form to add a new card to the grid.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter a title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter a description" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter a username" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto" onClick={() => setShowForm(false)}>
                Create Card
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
