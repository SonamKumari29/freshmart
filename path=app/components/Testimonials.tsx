import { Carousel, CarouselItem } from "@/components/ui/carousel";

const testimonials = [
  { name: "John Doe", message: "Great quality and service!" },
  { name: "Jane Smith", message: "I love the freshness of all products." },
  // Add more testimonials
];

export function Testimonials() {
  return (
    <Carousel>
      {testimonials.map((testimonial, index) => (
        <CarouselItem key={index} className="p-4">
          <p className="text-lg">{testimonial.message}</p>
          <p className="text-sm font-medium text-muted-foreground">{testimonial.name}</p>
        </CarouselItem>
      ))}
    </Carousel>
  );
} 