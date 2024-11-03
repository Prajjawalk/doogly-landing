"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Coins,
  Gift,
  Wallet,
  Globe,
  PlusCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <header className="container mx-auto py-6 flex items-center gap-2">
        <img src="/doogly-logo.png" alt="Doogly Logo" className="h-12 w-12" />
        <h1 className="text-4xl font-bold">Doogly</h1>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h2 className="text-5xl font-extrabold mb-6">
            Empower Causes with Crypto Donations
          </h2>
          <p className="text-xl mb-8">
            Receive donations in crypto and reward donors with unique NFTs
            (Hypercerts)
          </p>
          <Button
            size="lg"
            className="bg-yellow-400 text-purple-900 hover:bg-yellow-300"
          >
            Coming Soon
          </Button>
        </section>

        {/* How it Works Section */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">How It Works</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Wallet className="mr-2" /> For Recipients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Connect your wallet</li>
                  <li>Create a campaign</li>
                  <li>Set donation goals and mint Hypercerts</li>
                  <li>Share your donation widget</li>
                  <li>Track donations and distribute rewards</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Coins className="mr-2" /> For Donors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Click the donation button on a campaign</li>
                  <li>Choose your preferred blockchain and token</li>
                  <li>Specify donation amount</li>
                  <li>Complete the transaction</li>
                  <li>Receive a unique Hypercert NFT as a reward</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-12 w-12 mb-4" />,
                title: "Multi-chain Support",
                description: "Accept donations across various blockchains",
              },
              {
                icon: <Gift className="h-12 w-12 mb-4" />,
                title: "NFT Rewards",
                description:
                  "Automatically distribute Hypercert NFTs to donors",
              },
              {
                icon: <PlusCircle className="h-12 w-12 mb-4" />,
                title: "Easy Campaign Creation",
                description: "Set up donation campaigns in minutes",
              },
              {
                icon: <ArrowRight className="h-12 w-12 mb-4" />,
                title: "Embeddable Widget",
                description: "Add donation buttons to any website",
              },
              {
                icon: <Wallet className="h-12 w-12 mb-4" />,
                title: "Wallet Integration",
                description: "Seamless connection with popular crypto wallets",
              },
              {
                icon: <CheckCircle2 className="h-12 w-12 mb-4" />,
                title: "Transparent Tracking",
                description: "Real-time donation tracking and reporting",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-lg text-center"
              >
                <CardContent className="pt-6">
                  {feature.icon}
                  <CardTitle className="mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-200">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Start Your Crypto Donation Campaign?
          </h3>
          <Button
            size="lg"
            className="bg-yellow-400 text-purple-900 hover:bg-yellow-300"
          >
            Launch Your Campaign Now
          </Button>
        </section> */}
      </main>

      <footer className="container mx-auto py-6 text-center">
        <p>&copy; 2025 Doogly. All rights reserved.</p>
      </footer>
    </div>
  );
}
