import React, { useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="home">
      <h1 id="welcome" data-aos="fade-up">
        Welcome to Zentry! - “Empowering the Future of Asset Management.”
      </h1>

      <div data-aos="fade-right" data-aos-delay="200">
        <h2>About Us</h2>
        <p>
          Zentry is a next-generation blockchain-based asset management platform designed to bring
          transparency, trust, and security to digital ownership. Built on Hyperledger Fabric,
          Zentry leverages NFTs and smart contracts to enable seamless asset registration and secure
          transactions. Our mission is to empower individuals and organizations with a decentralized
          system that ensures authenticity, reduces fraud, and simplifies asset exchange in the
          digital economy.
        </p>
      </div>

      <div data-aos="fade-left" data-aos-delay="400">
        <h2>Our Mission</h2>
        <p>
          At Zentry, our mission is to redefine digital ownership through secure, transparent, and
          decentralized asset management. We aim to empower users by providing a blockchain-driven
          platform where every asset is verifiable, every transaction is trustworthy, and every
          exchange is seamless. Zentry strives to make digital asset management accessible, reliable,
          and future-ready.
        </p>
      </div>

      <div data-aos="fade-right" data-aos-delay="600">
        <h2>What We Offer?</h2>
        <p>
          Zentry offers a secure and intuitive platform for managing, trading, and verifying digital
          assets on the blockchain. Our ecosystem enables users to easily register their assets as
          NFTs, ensuring authenticity and immutable proof of ownership. Through smart contracts, we
          provide automated escrow services and transparent transactions, minimizing risks and
          enhancing trust. With an integrated marketplace, users can seamlessly buy, sell, or
          transfer assets — all within a decentralized, user-first environment powered by Hyperledger
          Fabric.
        </p>
      </div>
    </div>
  );
}

export default Home;
