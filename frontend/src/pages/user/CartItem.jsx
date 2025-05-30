import React, { useState } from "react";
import { Minus, Plus, Trash2, ShoppingCart, MapPin, CreditCard, Truck, ArrowLeft, Tag } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Link } from "react-router-dom";

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    title: "The Silent Echo",
    author: "Maria Johnson",
    format: "Hardcover",
    price: 24.99,
    originalPrice: 29.99,
    quantity: 1,
    coverImage: "/placeholder.svg?height=120&width=80&text=Book1",
    inStock: true,
    isbn: "978-0123456789",
  },
  {
    id: 2,
    title: "Modern Philosophy: A Complete Guide",
    author: "Thomas Wright",
    format: "Paperback",
    price: 18.99,
    originalPrice: 18.99,
    quantity: 2,
    coverImage: "/placeholder.svg?height=120&width=80&text=Book2",
    inStock: true,
    isbn: "978-0987654321",
  },
  {
    id: 3,
    title: "The Art of Fiction Writing",
    author: "Elizabeth Stone",
    format: "eBook",
    price: 12.99,
    originalPrice: 16.99,
    quantity: 1,
    coverImage: "/placeholder.svg?height=120&width=80&text=Book3",
    inStock: true,
    isbn: "978-0456789123",
  },
  {
    id: 4,
    title: "History of Ancient Civilizations",
    author: "Robert Green",
    format: "Audiobook",
    price: 22.5,
    originalPrice: 25.0,
    quantity: 1,
    coverImage: "/placeholder.svg?height=120&width=80&text=Book4",
    inStock: false,
    isbn: "978-0789123456",
  },
];

export default function CartItem() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    isDefault: false,
  });

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const savings = cartItems.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax
  const promoDiscount = promoApplied ? subtotal * 0.1 : 0; // 10% discount
  const total = subtotal + shipping + tax - promoDiscount;

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // Handle address change
  const handleAddressChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDeliveryAddress((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Apply promo code
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setPromoApplied(true);
      alert("Promo code applied! 10% discount added.");
    } else {
      alert("Invalid promo code. Try 'SAVE10' for 10% off!");
    }
  };

  // Handle checkout
  const handleCheckout = () => {
    if (!deliveryAddress.firstName || !deliveryAddress.email || !deliveryAddress.address) {
      alert("Please fill in all required delivery information.");
      return;
    }

    // In a real app, this would process the payment
    alert(`Order placed successfully! Total: $${total.toFixed(2)}`);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some books to get started!</p>
          <Link to={'/products'}>
          <Button className="cursor-pointer">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <Link to={'/products'}>
              <Button  className="cursor-pointer" variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
                </Link>
              <h1 className="text-2xl font-bold">Shopping Cart</h1>
            </div>
            <div className="text-sm text-gray-600">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Cart Items
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Book Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.coverImage || "/placeholder.svg"}
                          alt={item.title}
                          className="w-20 h-30 object-cover rounded-md"
                        />
                      </div>

                      {/* Book Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg line-clamp-2">{item.title}</h3>
                            <p className="text-gray-600">by {item.author}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline">{item.format}</Badge>
                              {!item.inStock && <Badge variant="destructive">Out of Stock</Badge>}
                            </div>
                            <p className="text-xs text-gray-500 mt-1">ISBN: {item.isbn}</p>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Price and Quantity */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-lg">${item.price.toFixed(2)}</span>
                            {item.originalPrice > item.price && (
                              <span className="text-sm text-gray-500 line-through">
                                ${item.originalPrice.toFixed(2)}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              disabled={!item.inStock}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="text-right mt-2">
                          <span className="font-semibold">
                            Subtotal: ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                    {index < cartItems.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Delivery Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Delivery Address
                </CardTitle>
                <CardDescription>Where should we deliver your books?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={deliveryAddress.firstName}
                      onChange={handleAddressChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={deliveryAddress.lastName}
                      onChange={handleAddressChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={deliveryAddress.email}
                      onChange={handleAddressChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={deliveryAddress.phone}
                      onChange={handleAddressChange}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={deliveryAddress.address}
                    onChange={handleAddressChange}
                    rows={2}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={deliveryAddress.city}
                      onChange={handleAddressChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      name="state"
                      value={deliveryAddress.state}
                      onChange={handleAddressChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={deliveryAddress.zipCode}
                      onChange={handleAddressChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isDefault"
                    name="isDefault"
                    checked={deliveryAddress.isDefault}
                    onCheckedChange={(checked) =>
                      setDeliveryAddress((prev) => ({ ...prev, isDefault: checked }))
                    }
                  />
                  <Label htmlFor="isDefault">Save as default address</Label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Promo Code */}
                <div className="space-y-2">
                  <Label htmlFor="promoCode">Promo Code</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="promoCode"
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={promoApplied}
                    />
                    <Button
                      variant="outline"
                      onClick={applyPromoCode}
                      disabled={promoApplied || !promoCode}
                    >
                      <Tag className="h-4 w-4" />
                    </Button>
                  </div>
                  {promoApplied && <p className="text-sm text-green-600">✓ Promo code applied!</p>}
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  {savings > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>You Save</span>
                      <span>-${savings.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="flex items-center">
                      <Truck className="mr-1 h-4 w-4" />
                      Shipping
                    </span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  {promoApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Promo Discount (10%)</span>
                      <span>-${promoDiscount.toFixed(2)}</span>
                    </div>
                  )}

                  {shipping > 0 && (
                    <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded">
                      💡 Add ${(50 - subtotal).toFixed(2)} more for FREE shipping!
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <Button className="w-full" size="lg" onClick={handleCheckout}>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Proceed to Checkout
                </Button>

                <div className="text-xs text-gray-500 text-center">
                  Secure checkout powered by SSL encryption
                </div>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-sm">Delivery Information</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="flex items-center">
                  <Truck className="mr-2 h-4 w-4 text-green-600" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-blue-600" />
                  <span>Estimated delivery: 3-5 business days</span>
                </div>
                <div className="text-xs text-gray-500">
                  * eBooks and Audiobooks are delivered instantly after purchase
                </div>
              </CardContent>
            </Card>
            </div>
        </div>
      </div>
    </div>
  )
}
