import React, {useState, useEffect, useContext} from "react";

// internal import
import Style from "../styles/index.module.css";
import {
  AudioLive,
  BigNFTSlider,
  Brand,
  Category,
  Collection,
  Filter,
  FollowerTab,
  HeroSection,
  NFTCard,
  Service,
  Slider,
  Subscribe,
  Title,
  Video,
} from "../components/componentsindex";

// importing from smart contract
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";


const Home = () => {

  const { checkIfWalletConnected } = useContext(NFTMarketplaceContext);

  useEffect(() => {
    checkIfWalletConnected();
  },[])

  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
      heading="Latest Audio Collection"
      paragraph="Have a look at our choice of NFTs. They're awesome."
      />
      <AudioLive/>
      <FollowerTab />
      <Slider/>
      <Collection/>
      <Title
      heading="Featured NFTs"
      paragraph="Have a look at our choice of NFTs. They're awesome."
      />
      <Filter />
      <NFTCard/>
      <Title
      heading="Browse by Category"
      paragraph="View Various Categories of NFT data in the Marketplace"
      />
      <Category/>
      <Subscribe />
      <Brand />
      <Video/>
    </div>
  );
};

export default Home;
