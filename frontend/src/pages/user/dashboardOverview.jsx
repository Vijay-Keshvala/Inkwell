"use client"

import React, { useEffect, useState } from "react"
import { BookOpen, Clock, Package, ShoppingBag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card"

export default function DashboardOverview() {
    const [books, setBooks] = useState([])
    const [profile, setProfile] = useState({ name: "", email: "" }) // profile state
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) return;

                const response = await fetch("http://localhost:4000/api/user/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch profile");
                }

                const data = await response.json();

                setProfile((prev) => ({
                    ...prev,
                    name: data.name || "",
                    email: data.email || "",
                }));
            } catch (error) {
                console.error("Error fetching profile:", error.message);
            }
        };

        fetchProfile();
    }, []);
    const shuffleArray = (array) => {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      };
      useEffect(() => {
        const fetchBooks = async () => {
          try {
            const response = await fetch("https://openlibrary.org/search.json?q=bestseller"); // fetch more books for better shuffle
            const data = await response.json();
            const shuffledBooks = shuffleArray(data.docs); // shuffle all fetched books
            setBooks(shuffledBooks.slice(0, 6)); // then take first 6 shuffled
          } catch (error) {
            console.error("Failed to fetch books:", error);
          }
        };
      
        fetchBooks();
      }, []);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, {profile.name || "Guest"}!</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Purchases</CardTitle>
                        <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">24</div>
                        <p className="text-xs text-muted-foreground">+2 from last month</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">Arriving soon</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Books Owned</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">42</div>
                        <p className="text-xs text-muted-foreground">Digital & Physical</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Reading Time</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">128h</div>
                        <p className="text-xs text-muted-foreground">This year</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {/* <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest book interactions</CardDescription>
          </CardHeader>
          <CardContent>
            Add your recent activity component or data here
          </CardContent>
        </Card> */}

                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>Reading Recommendations</CardTitle>
                        <CardDescription>Based on your reading history</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-6">
                            {books.map((book, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <img
                                        src={
                                            book.cover_i
                                                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                                                : `/placeholder.svg?height=60&width=40&text=Book`
                                        }
                                        alt="Book cover"
                                        className="h-15 w-10 object-cover rounded"
                                    />
                                    <div>
                                        <h4 className="font-medium">{book.title}</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {book.author_name?.[0] || "Unknown Author"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
