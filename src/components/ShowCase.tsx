import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import BunImage from "@/assets/images/bun.jpg";
import CakeImage from "@/assets/images/cake.jpg";
import HamburgerImage from "@/assets/images/hamburger.jpg";
import MeatImage from "@/assets/images/meat.jpg";
import PizzaImage from "@/assets/images/pizza.jpg";
import SalmonImage from "@/assets/images/salmon.jpg";

type ImageSlide = {
  image: ImageMetadata;
  title: string;
  alt: string;
};

const Slides: ImageSlide[] = [
  {
    image: BunImage,
    title: "Bread buns",
    alt: "Bread buns",
  },
  {
    image: CakeImage,
    title: "Cake",
    alt: "cake",
  },
  {
    image: HamburgerImage,
    title: "Hamburger",
    alt: "hamburger",
  },
  {
    image: MeatImage,
    title: "Meat",
    alt: "meat",
  },
  {
    image: PizzaImage,
    title: "Pizza",
    alt: "pizza",
  },
  {
    image: SalmonImage,
    title: "Salmon",
    alt: "salmon",
  },
];

export default function ShowCase(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ active: true, delay: 2500 })]}
      className={cn("w-full", props.className)}
    >
      <CarouselContent className="-ml-1">
        {Slides.map((slide, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-3">
                <img
                  src={slide.image.src}
                  alt={slide.alt}
                  loading="lazy"
                  className="size-full object-cover rounded-md"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
