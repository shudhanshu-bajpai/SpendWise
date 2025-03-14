import HeroSection from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import { statsData, featuresData, howItWorksData, testimonialsData } from "@/data/landing";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <section className="py-15 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index)=>(
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{statsData.value}</div>
                  <div className="text-gray-600">{statsData.label}</div>
                </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12">Everything you need to manage your finances</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuresData.map((feature, index) => (
                  <Card key={index} className="shadow-md shadow-gray-100 hover:scale-104 transition-transform 300ms">
                    <CardContent>
                      <div className="flex items-center justify-center mb-6">
                      <span>{feature.icon}</span>
                      <h3 className="text-lg pl-3 font-semibold">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 text-center text-[17px]">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
      </section>
      <section className="py-20 bg-blue-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {howItWorksData.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">{step.icon}</div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
      </section>
      <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12">Feedback from Users</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonialsData.map((testimonial, index) => (
                  <Card key={index} className="shadow-lg p-6 hover:scale-97 transition-transform 300ms">
                    <CardContent className="pt-4">
                      <div className="flex items-center mb-4">
                        <Image 
                        src={testimonial.image}
                        width={40}
                        height={40}
                        className="rounded-full mb-2"
                        alt={testimonial.name}
                        />
                        <div className="ml-4">
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-gray-600 pb-2">{testimonial.role}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-800">{testimonial.quote}</p>
                    </CardContent>
                  </Card> 
                ))}
              </div>
            </div>
      </section>
      <section className="py-20 bg-gradient-to-bl from-green-400 to-blue-400 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-center mb-4"> Ready to Take Control of Your Finances?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already managing their finances smarter with SpendWise
              </p>
              <Link href="/dashboard">
              <Button size="lg" className="bg-white text-[17px] text-blue-500 hover:bg-blue-50 cursor-pointer animate-bounce">
                  Start Free Trial <span></span>
              </Button>
              </Link>
              </div>
      </section>
    </div>
  );
}

