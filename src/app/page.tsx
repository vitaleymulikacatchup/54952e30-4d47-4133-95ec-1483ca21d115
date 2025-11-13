"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, BookOpen, Brain, Target, Zap } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="circleGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="ABACUS"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Master Mathematics with ABACUS"
          description="Learn to solve mathematical problems faster than a calculator through our proven ABACUS methodology"
          tag="Speed Mathematics"
          tagIcon={Zap}
          buttons={[
            { text: "Start Learning", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g79ff6d72ab6c645fa3f48db17f40734ef76d779e4ab9b73377ba1e6d7c4002df4c05bc48bcb120e8cc0ea074f3e661b98069c174446fa1a7d67e2a99fea03d70_1280.jpg",
              imageAlt: "ABACUS mathematics learning"
            },
            {
              imageSrc: "https://pixabay.com/get/g996e8297a8ad37ce1132410c36e4e8e871a967d94c0269061ae1a275211e58a5c2ad2289d600ea82067dd4485a5c932956e43ffa369035800aaa463558b51aba_1280.jpg",
              imageAlt: "Fast calculation techniques"
            },
            {
              imageSrc: "https://pixabay.com/get/gc672e284f34b7671a8cabe5681a2719d0257dc3bfdf7a0c708c571746af9546e39c48f62330d8ccd20e3921feb5f2d6ef32c7a32cd8b78230d3beca5faf1ff8b_1280.jpg",
              imageAlt: "Students practicing"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="ABACUS transforms how students approach mathematics, building speed, accuracy, and confidence through time-tested techniques that make complex calculations feel effortless."
          features={[
            {
              icon: Zap,
              title: "Lightning Speed",
              description: "Develop calculation speeds faster than calculators through systematic ABACUS training and mental math techniques"
            },
            {
              icon: Brain,
              title: "Enhanced Memory",
              description: "Strengthen memory and concentration skills that benefit all areas of academic performance and cognitive development"
            },
            {
              icon: Target,
              title: "Proven Methods",
              description: "Learn time-tested ABACUS techniques that have helped millions of students worldwide excel in mathematics"
            },
            {
              icon: Award,
              title: "Confidence Building",
              description: "Build unshakeable confidence in mathematics that transforms students from math-anxious to math-enthusiastic learners"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          title="Our Learning Process"
          description="Step-by-step methodology to master mathematical speed"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "ABACUS Fundamentals",
              description: "Master the basic bead movements and finger techniques that form the foundation of speed mathematics",
              imageSrc: "https://pixabay.com/get/g0b0b83e6e8eb81ee87d04ab879a5abf5537f318fec987495fa3db3f0917f8e9cf0e5966c0b639b17215a8e2bfe85e09063586a379375dc92ba6fe09e2dca03d8_1280.jpg"
            },
            {
              id: 2,
              title: "Mental Visualization",
              description: "Develop the ability to visualize the ABACUS in your mind for lightning-fast calculations without the physical tool",
              imageSrc: "https://pixabay.com/get/g9d3a1c7ec59ee7b750c783b45c1bec123b5cecc595134d8e247eb1a0a39fb46b3716b66b2a7b4b94e857c8390fd37052_1280.jpg"
            },
            {
              id: 3,
              title: "Speed Building",
              description: "Progressively increase calculation speed through structured practice sessions and timed exercises",
              imageSrc: "https://pixabay.com/get/g996e8297a8ad37ce1132410c36e4e8e871a967d94c0269061ae1a275211e58a5c2ad2289d600ea82067dd4485a5c932956e43ffa369035800aaa463558b51aba_1280.jpg"
            },
            {
              id: 4,
              title: "Advanced Techniques",
              description: "Learn complex operations including multiplication, division, and multi-digit calculations at incredible speeds",
              imageSrc: "https://pixabay.com/get/gc672e284f34b7671a8cabe5681a2719d0257dc3bfdf7a0c708c571746af9546e39c48f62330d8ccd20e3921feb5f2d6ef32c7a32cd8b78230d3beca5faf1ff8b_1280.jpg"
            },
            {
              id: 5,
              title: "Competition Readiness",
              description: "Prepare for mathematics competitions and achieve results that showcase your newfound mathematical prowess",
              imageSrc: "https://pixabay.com/get/g11f30a9f31be2dad39563acda63c30d824bb2547980c36c7a82673be16d2e97703b83757a05899dffd38a3b1c15d9b4bb6075401f934d5f92527a85f5ac4b949_1280.jpg"
            },
            {
              id: 6,
              title: "Confidence Mastery",
              description: "Transform mathematical anxiety into confidence through consistent success and systematic skill development",
              imageSrc: "https://pixabay.com/get/gc125b72db326a9e1dd49ea5d39ab5dcd763792160a397fc29735b1b333b705a7b298a1407b8d7c58da66c68a98f869b50bac28c38048f953b1daa18d6d867c93_1280.jpg"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Student Success Stories"
          description="Real results from students who mastered mathematics with ABACUS"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Emma Chen",
              role: "Student, Age 12",
              company: "Lincoln Elementary",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gb7f67e4dde357324fc6406e2d43a55b08cce50bf30c9575c670111ceaf94a1f00d5d46296cf1987d3bd9bfe48e9fb9fce40210267ebd7f9579cfb820e743c983_1280.jpg"
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "Student, Age 14",
              company: "Washington Middle School",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g41df7f4d2a0f05ff9b6ba58e14e54d18d8c7a0e8d0092f28bf74f02da89374d1bd76575d446715109b0f453047673de0c6e3964ddaade16bcfb3db7d48daccf5_1280.jpg"
            },
            {
              id: "3",
              name: "Sophia Patel",
              role: "Student, Age 13",
              company: "Roosevelt Academy",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ge383790646ade5e95bf11aa050d27c29dd9fc92df11bb96f376a3d4188baad477a7002e08804703c18e46bdb75f6170f569394c03b0e517832becdf6997e784a_1280.jpg"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Student, Age 15",
              company: "Jefferson High School",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g75c2510df41e2658254bacf6fbdaf1293afe1ebcb929c2e3f3194abbcf4c0b9fd3137c335a0614932afe53a4366de1599129159eebbec736e5cde4811fb79646_1280.jpg"
            },
            {
              id: "5",
              name: "Isabella Thompson",
              role: "Student, Age 11",
              company: "Franklin Elementary",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g89b22da8714165881e3b43a5a0d665a84ff0b7b9c140a479a29167a5314fc3d5172c8e795cc2e93ea66ecc75c3091c09a0170efd8ed4f979f259710a9d517541_1280.jpg"
            },
            {
              id: "6",
              name: "Ethan Williams",
              role: "Student, Age 16",
              company: "Madison Prep School",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g89b659d5b783a31db52eff71f1a856326b76c76ad13b0d226f71a796efdb5ec51b351f75f805d0ed8bfa79dd847ebc774c5201b444a669edc745a1b9febba0f4_1280.jpg"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={BookOpen}
          title="Ready to Transform Your Math Skills?"
          description="Join thousands of students who have already mastered the art of speed mathematics through our proven ABACUS methodology."
          inputPlaceholder="Enter your email"
          buttonText="Start Learning"
          termsText="By signing up, you agree to receive updates about our ABACUS courses and methodology."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="ABACUS"
          columns={[
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Method", href: "features" },
                { label: "Success Stories", href: "testimonials" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Enrollment", href: "contact" },
                { label: "Support", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}