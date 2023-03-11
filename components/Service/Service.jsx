import React from "react";
import Image from "next/image";

// local import
import Style from "./Service.module.css";
import images from "../../img";

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="filter and discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step1</span>
          </p>
          <h3>Filter and Discover</h3>
          <p>Link Your Wallet, Explore, Create, Purchase and Sell NFTs </p>
        </div>

        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="filter and discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step1</span>
          </p>
          <h3>Join Community</h3>
          <p>Link Your Wallet, Explore, Create, Purchase and Sell NFTs </p>
        </div>

        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="filter and discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Link your Wallet</span>
          </p>
          <h3>Filter and Discover</h3>
          <p>Link Your Wallet, Explore, Create, Purchase and Sell NFTs </p>
        </div>

        <div className={Style.service_box_item}>
          <Image
            src={images.service4}
            alt="filter and discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Trade</span>
          </p>
          <h3>Filter and Discover</h3>
          <p>Link Your Wallet, Explore, Create, Purchase and Sell NFTs </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
