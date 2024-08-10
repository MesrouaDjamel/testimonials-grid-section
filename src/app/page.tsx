import Container from "@/components/Container";
import ListTestimonialCard from "@/components/ListTestimonialCard";
import CssGrid from "@/components/test/CssGrid";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col items-center justify-center  bg-lightGray">
      <Container>
        <ListTestimonialCard />
      </Container>
    </main>
  );
}

