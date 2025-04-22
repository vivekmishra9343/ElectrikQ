import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1A1F2C] to-[#0A1A16] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Join the EV Revolution?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Sign up today and get exclusive access to our nationwide network of charging stations, 
          special discounts, and the latest updates on our expanding infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white font-medium px-8 py-6 text-lg rounded-md">
            Get Started
          </Button>
          <Button variant="outline" className="border-white text-black hover:bg-white/10 hover:text-teal-50 px-8 py-6 text-lg rounded-md">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;