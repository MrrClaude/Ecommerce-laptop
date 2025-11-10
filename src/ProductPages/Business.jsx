import React, { useContext, useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { FaCartShopping } from "react-icons/fa6";
import Carousel from "../component/Carousel";
import ThemeContext from "../context/themeProvder";
import CardModal from "../component/CardModal";
import CartContext from "../context/CartContext";

const cards=[
  // ====================== MSI ======================
  {
    id: 1,
    img: "https://asset.msi.com/resize/image/global/product/product_1690536421b028be6fc4b285acb8e2c924dbc5cc1d.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    brand: "MSI",
    smallImg: ["https://asset.msi.com/resize/image/global/product/product_1670318540e7a18bdcd7d0983486f4b492d46d1b57.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_16703185422b9082c175f523ab1d49ed0a63b717bf.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_167031854405ef898976e7ade1706c452b20c51c7d.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      "https://asset.msi.com/resize/image/global/product/product_1670318546e6d65b00bfe28e85917125d3a454b632.png62405b38c58fe0f07fcef2367d8a9ba1/600.png"
    ],
    title: "MSI Modern 14 C13M",
    desc: "A slim and lightweight business laptop designed for professionals who value mobility and performance.",
    stars: new Array(4).fill(true),
    list: [
      "Intel Core i7-1355U (10-core, up to 5.0GHz)",
      "14-inch FHD IPS display (1920x1080)",
      "16GB DDR4 RAM, 1TB NVMe SSD",
      "Wi-Fi 6, USB-C, HDMI, microSD reader",
      "Backlit keyboard and fingerprint sensor",
      "Aluminum chassis weighing only 1.4kg"
    ],
    rating: "4.7",
    price: 950
  },
  {
    id: 2,
    img: "https://asset.msi.com/resize/image/global/product/product_16902703853048222df800b90210131c923abdae16.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    brand: "MSI",
    smallImg: ["https://asset.msi.com/resize/image/global/product/product_1625548141dc57b87af8fef3acfdfc57c8c6579ee9.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      "https://asset.msi.com/resize/image/global/product/product_1625548144ec4bf5dfb9341856b41990bfe920ed6f.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      "https://asset.msi.com/resize/image/global/product/product_1625548150ca50d9f371d41a2676553e4c67dbee9c.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      "https://asset.msi.com/resize/image/global/product/product_1625548148c7d38d296494f398bbc6735f4db213df.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
    ],
    title: "MSI Summit E16 Flip Evo",
    desc: "Premium 2-in-1 business laptop with touch and pen support for creative professionals.",
    stars: new Array(5).fill(true),
    list: [
      "Intel Core i7-13700H (14-core, up to 5.0GHz)",
      "16-inch QHD+ touchscreen (2560x1600), 120Hz",
      "32GB LPDDR5 RAM, 1TB NVMe SSD",
      "360° hinge with MSI Pen support",
      "Thunderbolt 4, Wi-Fi 6E, IR webcam with TPM 2.0",
      "All-day battery and aluminum body"
    ],
    rating: "4.8",
    price: 1799
  },
  {
    id: 3,
    img: "https://asset.msi.com/resize/image/global/product/product_17369954671c3ffd5437c6c36b2656e597b74a90b7.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    brand: "MSI",
    smallImg: ["https://asset.msi.com/resize/image/global/product/product_1735542257c0f9b4e9d49464b0e39406ec62ec238c.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      "https://asset.msi.com/resize/image/global/product/product_173554225547d1582020ff5207fcc956e2b820ac57.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      "https://asset.msi.com/resize/image/global/product/product_173699546762eac7708d2a2eedc9a97ff44b51fd05.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      "https://asset.msi.com/resize/image/global/product/product_17369954690d8e76e68a332f22a02b1a616054ebe0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
    ],
    title: "MSI Prestige 13 AI Evo",
    desc: "An AI-powered ultralight business laptop for multitasking executives on the move.",
    stars: new Array(5).fill(true),
    list: [
      "Intel Core Ultra 7 155H (AI-ready processor)",
      "13.3-inch OLED display (2880x1800), 100% DCI-P3",
      "32GB LPDDR5x memory, 1TB SSD",
      "Windows Hello IR camera and fingerprint login",
      "Weighs just 990g, battery up to 20 hours",
      "Thunderbolt 4 and USB 4.0 connectivity"
    ],
    rating: "4.9",
    price: 1899
  },

  // ====================== MAC ======================
  {
    id: 4,
    img: "https://t4.ftcdn.net/jpg/06/88/30/33/360_F_688303314_66lSzEKvh6cgqXjQTve3HcAwNjN67M19.webp",
    brand: "Mac",
    smallImg: ["https://t4.ftcdn.net/jpg/06/09/32/03/360_F_609320348_9f5pKlxMdiawOxwMhG2bz3hfJiGPN7ZV.webp",
      "https://t4.ftcdn.net/jpg/11/98/32/79/360_F_1198327901_5tp3iDJZdKJlbc4JKu4qGpFtq0dfRvxj.webp",
      "https://t4.ftcdn.net/jpg/04/63/33/23/240_F_463332353_JEodqbgTdB7r7pPRPPPaKwMP9dJXvn3n.jpg",
      "https://t3.ftcdn.net/jpg/06/09/32/02/240_F_609320297_ZSXZtM0SiVvybwRUNQPCyUTavoJDYokp.jpg"
    ],
    title: "MacBook Pro M3",
    desc: "Supercharged by the Apple M3 chip for unbeatable creative and performance workflows.",
    stars: new Array(5).fill(true),
    list: [
      "Apple M3 chip (8-core CPU, 10-core GPU, 16-core Neural Engine)",
      "14-inch Liquid Retina XDR display (3024x1964)",
      "Up to 22 hours battery life",
      "8GB Unified Memory, 512GB SSD",
      "MagSafe 3, 2x Thunderbolt/USB 4, HDMI",
      "High-fidelity six-speaker sound system"
    ],
    rating: "4.9",
    price: 2500
  },
  {
    id: 5,
    img: "https://assets.superhivemarket.com/store/product/197026/image/e07f43f769cd20abdbf31b12196532a0.png",
    brand: "Mac",
    smallImg: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwfkEKxkyAsPyivpALCGrlIg4VjM6pKiT3aQPxcxycORkU5bkt-Qdqtymq5c4oyFWOPc&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQ0-oZ94YVFtsuVHwWwyQDW1YmZU3mgw0Om5bkywb2-tWUMn3CHDsVRzZfYaCW4hPq1k&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ08P34rEtdhpso-wdRS0fU4B1OJVJFPuJxl4nMp3y0aX0zYVtFyMJ6rMyl0KN7VkageY&usqp=CAU",
      "https://www.apple.com/v/macbook-pro/at/images/overview/welcome/hero_endframe__e4ls9pihykya_xlarge.jpg"
    ],
    title: "MacBook Pro M3 Pro",
    desc: "Powerful and efficient for professional workloads, coding, and design.",
    stars: new Array(5).fill(true),
    list: [
      "Apple M3 Pro chip (12-core CPU, 18-core GPU)",
      "16-inch Liquid Retina XDR display",
      "18GB Unified Memory, 1TB SSD",
      "ProMotion 120Hz, True Tone display",
      "Three Thunderbolt 4 ports, HDMI, SDXC card slot",
      "Magic Keyboard with Touch ID"
    ],
    rating: "4.9",
    price: 2899
  },

  // ====================== ASUS ======================
  {
    id: 7,
    img: "https://dlcdnwebimgs.asus.com/gain/5863b64a-b038-4da1-902d-359b9db3bac7/w800/fwebp",
    brand: "ASUS",
    smallImg: ["https://dlcdnwebimgs.asus.com/gain/0ee29a83-5fe5-4b37-a7a7-e24e6230d7e0/w800/fwebp",
      "https://dlcdnwebimgs.asus.com/gain/bb887880-df57-42e8-8917-b7718b1822ad/w800/fwebp",
      "https://dlcdnwebimgs.asus.com/gain/cda79fdc-ac39-41d9-8c53-3e6829b2c086/w800/fwebp",
      "https://dlcdnwebimgs.asus.com/gain/f7d76e70-6174-4a5f-b9cc-63b2a3a994c8/w80/fwebp"

    ],
    title: "ASUS ExpertBook B9 OLED",
    desc: "Ultra-light business laptop offering excellent durability and vivid visuals.",
    stars: new Array(5).fill(true),
    list: [
      "Intel Core i7-1365U (10-core)",
      "14-inch 2.8K OLED display, 90Hz",
      "32GB LPDDR5 RAM, 1TB SSD",
      "Fingerprint login and TPM 2.0",
      "Dual Thunderbolt 4, HDMI, USB-A",
      "Weight: only 990g"
    ],
    rating: "4.8",
    price: 1899
  },
  {
    id: 8,
    img: "https://dlcdnwebimgs.asus.com/gain/5863b64a-b038-4da1-902d-359b9db3bac7/w800/fwebp",
    brand: "ASUS",
    smallImg: ["https://dlcdnwebimgs.asus.com/gain/0ee29a83-5fe5-4b37-a7a7-e24e6230d7e0/w80/fwebp",
      "https://dlcdnwebimgs.asus.com/gain/bb887880-df57-42e8-8917-b7718b1822ad/w80/fwebp",
      "https://dlcdnwebimgs.asus.com/gain/cda79fdc-ac39-41d9-8c53-3e6829b2c086/w80/fwebp",
      "https://dlcdnwebimgs.asus.com/gain/5968d241-850a-4e0a-ad8b-282b33fcb81d/w80/fwebp"
    ],
    title: "ASUS ZenBook 14 OLED",
    desc: "Portable power with brilliant OLED visuals and long battery life.",
    stars: new Array(4).fill(true),
    list: [
      "AMD Ryzen 7 7840U processor",
      "14-inch 2.8K OLED NanoEdge display",
      "16GB LPDDR5 RAM, 1TB SSD",
      "Wi-Fi 6E, fingerprint reader, NumberPad touchpad",
      "Dolby Atmos audio with Harman Kardon",
      "Sleek aluminum design weighing 1.2kg"
    ],
    rating: "4.7",
    price: 1199
  },
  {
    id: 9,
    img: "https://dlcdnwebimgs.asus.com/gain/2de68c29-56e1-4a9b-a84e-d85fd170d60c/w800/fwebp",
    brand: "ASUS",
    smallImg: ["https://dlcdnwebimgs.asus.com/gain/5feb276c-24fd-412f-b955-577e426e1303/w80/fwebp",
      "https://dlcdnwebimgs.asus.com/gain/0a4d9a12-16c5-4428-9a2d-9c28f727c303/w80/fwebp",
      "https://dlcdnwebimgs.asus.com/gain/0fd0eb80-01f9-454f-8e91-406ade39d7e0/w80/fwebp",
      "https://dlcdnwebimgs.asus.com/gain/5504b033-9498-45fb-9a95-582cfe6523a7/w80/fwebp"
    ],
    title: "ASUS Vivobook S15 OLED",
    desc: "Stylish productivity laptop with OLED display and 180° hinge.",
    stars: new Array(4).fill(true),
    list: [
      "Intel Core i7-13700H (14-core)",
      "15.6-inch 2.8K OLED display, 120Hz",
      "16GB RAM, 512GB SSD",
      "Backlit keyboard, fingerprint reader",
      "Wi-Fi 6E, USB-C, HDMI ports",
      "Military-grade durability"
    ],
    rating: "4.6",
    price: 1099
  },

  // ====================== DELL ======================
  {
    id: 10,
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320t-cnb-00005ff090-sl-oled.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=628&qlt=100,1&resMode=sharp2&size=628,402&chrss=full",
    brand: "Dell",
    smallImg: ["https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320t-cnb-00050rf115-sl.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=698&qlt=100,1&resMode=sharp2&size=698,402&chrss=full",
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320t-cnb-media-00000td090-sl.psd?fmt=png-alpha&scl=1&hei=71&wid=92&qlt=100,1&resMode=sharp2&size=92,71&chrss=full",
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320t-cnb-00180bf090-sl.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=516&qlt=100,1&resMode=sharp2&size=516,402&chrss=full",
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320t-cnb-00090rp090-sl.psd?fmt=png-alpha&scl=1&hei=93&wid=92&qlt=100,1&resMode=sharp2&size=92,93&chrss=full"
    ],
    title: "Dell XPS 13 Plus",
    desc: "Compact yet powerful business ultrabook with a premium edge-to-edge design.",
    stars: new Array(5).fill(true),
    list: [
      "Intel Core Ultra 7 155H (16-core)",
      "13.4-inch 3.5K OLED display",
      "32GB LPDDR5x RAM, 1TB SSD",
      "Edge-to-edge keyboard and haptic touchpad",
      "Thunderbolt 4, Wi-Fi 6E",
      "Sustainable carbon-neutral materials"
    ],
    rating: "4.8",
    price: 2099
  },
  {
    id: 11,
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9350/media-gallery/platinum/notebook-xps-13-9350-t-oled-sl-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=699&qlt=100,1&resMode=sharp2&size=699,402&chrss=full",
    brand: "Dell",
    smallImg: ["https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320t-cnb-00050rf115-sl.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=698&qlt=100,1&resMode=sharp2&size=698,402&chrss=full",
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320t-cnb-media-00000td090-sl.psd?fmt=png-alpha&scl=1&hei=71&wid=92&qlt=100,1&resMode=sharp2&size=92,71&chrss=full",
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320t-cnb-00180bf090-sl.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=516&qlt=100,1&resMode=sharp2&size=516,402&chrss=full",
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320t-cnb-00090rp090-sl.psd?fmt=png-alpha&scl=1&hei=93&wid=92&qlt=100,1&resMode=sharp2&size=92,93&chrss=full"
    ],
    title: "Dell XPS 14",
    desc: "The perfect balance of power, battery, and portability for executives.",
    stars: new Array(5).fill(true),
    list: [
      "Intel Core Ultra 9 185H processor",
      "14.5-inch OLED display (3K, 120Hz)",
      "32GB LPDDR5x memory, 1TB SSD",
      "Dual Thunderbolt 4, HDMI, SD card reader",
      "Aluminum unibody, Gorilla Glass protection",
      "AI noise reduction and privacy shutter"
    ],
    rating: "4.9",
    price: 2299
  },
  {
    id: 12,
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-20.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=571&qlt=100,1&resMode=sharp2&size=571,402&chrss=full",
    brand: "Dell",
    smallImg: ["https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=696&qlt=100,1&resMode=sharp2&size=696,402&chrss=full",
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-7.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=413&qlt=100,1&resMode=sharp2&size=413,402&chrss=full",
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-galllery-9.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=615&qlt=100,1&resMode=sharp2&size=615,402&chrss=full",
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-7450-laptop-2-in-1/mg/notebook-latitude-14-7450-t-gray-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=640&qlt=100,1&resMode=sharp2&size=640,402&chrss=full"
    ],
    title: "Dell Latitude 7440",
    desc: "A durable business laptop built for enterprise-grade security and collaboration.",
    stars: new Array(4).fill(true),
    list: [
      "Intel Core i7-1365U vPro",
      "14-inch FHD+ anti-glare display",
      "16GB RAM, 512GB SSD",
      "Wi-Fi 6E, LTE-ready, smart card reader",
      "AI-based background noise reduction",
      "Dell Optimizer for business efficiency"
    ],
    rating: "4.7",
    price: 1699
  },

  // ====================== LENOVO ======================
  {
    id: 13,
    img: "https://p1-ofp.static.pub/ShareResource/na/products/thinkpad/560x450/lenovo-thinkpad-x1-carbon-gen-11-2023.png?width=400&height=400",
    brand: "Lenovo",
    smallImg: ["https://p1-ofp.static.pub/fes/cms/2023/02/10/m2x90er7aq4issqfzku0vuli4086vv761445.png?width=400&height=400",
      "https://p4-ofp.static.pub/fes/cms/2023/02/10/7qjkk7h1a53t8jq5snivyzumxw040v193587.png?width=400&height=400",
      "https://p4-ofp.static.pub/fes/cms/2023/02/10/xa1izwrh1afx0gmy8zgpd0513ylbyn567724.png?width=400&height=400",
      "https://p3-ofp.static.pub/fes/cms/2023/02/10/9d7529yurndmsmbwac9ky16asrjf9u590549.png?width=400&height=400"
    ],
    title: "Lenovo ThinkPad X1 Carbon Gen 11",
    desc: "Legendary business laptop known for reliability, security, and top-tier design.",
    stars: new Array(5).fill(true),
    list: [
      "Intel Core i7-1370P vPro",
      "14-inch 2.8K OLED touch display",
      "16GB LPDDR5, 1TB SSD",
      "Wi-Fi 6E, 5G-ready, IR camera, fingerprint reader",
      "Carbon fiber chassis, MIL-STD tested",
      "Rapid Charge: 80% in 1 hour"
    ],
    rating: "4.9",
    price: 1999
  },
  {
    id: 14,
    img: "https://p2-ofp.static.pub//fes/cms/2023/08/16/iutq4rio1br7mpt6uk1b8bfzhxyhph475181.png?width=400&height=400",
    brand: "Lenovo",
    smallImg: ["https://p1-ofp.static.pub//fes/cms/2023/08/16/4h5u5leyr3a7onx3nxg5t7irifw9rm765998.png?width=400&height=400",
      "https://p2-ofp.static.pub//fes/cms/2023/08/16/iutq4rio1br7mpt6uk1b8bfzhxyhph475181.png?width=400&height=400",
      "https://p1-ofp.static.pub//fes/cms/2023/08/16/1100f4v17o8e8scewfzue96u6up55e505290.png?width=400&height=400",
      "https://p4-ofp.static.pub//fes/cms/2023/08/16/4963nn62vh1dglah089zrafvkileht796064.png?width=50&height=50"
    ],
    title: "Lenovo ThinkBook 14 Gen 6",
    desc: "Balanced performance laptop for modern businesses and students alike.",
    stars: new Array(4).fill(true),
    list: [
      "AMD Ryzen 7 7840U processor",
      "14-inch FHD+ anti-glare display",
      "16GB RAM, 512GB SSD",
      "Fingerprint reader on power button",
      "Wi-Fi 6E, HDMI, USB-C, RJ45 port",
      "Durable aluminum top cover"
    ],
    rating: "4.6",
    price: 1099
  },
  {
    id: 15,
    img: "https://p3-ofp.static.pub//fes/cms/2024/12/17/1rlz75lg61bmm73vy226xvf6qldmia782130.png?width=400&height=400",
    brand: "Lenovo",
    smallImg: ["https://p2-ofp.static.pub//fes/cms/2024/12/17/1bw369z3fe5t67id5denvjkoy2eeea229271.jpg?width=400&height=400",
      "https://p2-ofp.static.pub//fes/cms/2024/12/17/dj8sro4i9ucdx1bbsygp66xfcd2uwa780663.jpg?width=400&height=400",
      "https://p2-ofp.static.pub//fes/cms/2024/12/17/0pyf16300ssrmu090ukoayml3zejzk275550.jpg?width=400&height=400",
      "https://p2-ofp.static.pub//fes/cms/2024/12/17/qvfr85f7t1l18pzwuw2osbkyecg1ul728703.jpg?width=400&height=400"
    ],
    title: "Lenovo IdeaPad Pro 5",
    desc: "Performance-driven business laptop with sleek design and powerful AMD hardware.",
    stars: new Array(4).fill(true),
    list: [
      "AMD Ryzen 7 7840HS processor",
      "14-inch 2.5K IPS display (120Hz)",
      "16GB DDR5 memory, 1TB SSD",
      "Wi-Fi 6, USB-C fast charging",
      "Privacy shutter and backlit keyboard",
      "All-day 12-hour battery life"
    ],
    rating: "4.7",
    price: 1249
  }
]


const Business = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(cards);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const searchRef = useRef(null);
  const productsPerPage = 12;

  const { theme } = useContext(ThemeContext);
  const { addToCart } = useContext(CartContext);

  const brands = ["All", "MSI", "ASUS", "MAC", "LENOVO","DELL"];

  // Hide dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search and filter logic
  useEffect(() => {
    let filtered = cards;

    // Filter by brand
    if (selectedBrand !== "All") {
      filtered = filtered.filter(
        (p) => p.brand.toUpperCase() === selectedBrand.toUpperCase()
      );
    }

    // Filter by search
    if (query.trim()) {
      const searchTerm = query.toLowerCase();
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchTerm)
      );
      setFilteredSuggestions(filtered);
      setShowDropdown(true);
    } else {
      setFilteredSuggestions([]);
      setShowDropdown(false);
    }

    setResult(filtered);
    setCurrentPage(1);
  }, [query, selectedBrand]);

  // Pagination
  const totalPages = Math.ceil(result.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = result.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const handleSuggestionClick = (product) => {
    setQuery(product.title);
    setShowDropdown(false);
  };

  return (
    <div
      className={`w-full py-10 mt-[90px] m-auto ${
        theme === "dark"
          ? "border-gray-700 bg-gradient-to-tr from-gray-900 via-gray-950 to-black text-white"
          : "border-gray-200 bg-white text-gray-800 shadow-sm"
      }`}
    >
      <Carousel />

      {/* Title */}
      <h1 className="font-bold text-[3rem] text-center mt-6 font-serif">
        Laptop Business
      </h1>

      <div className="flex flex-col md:flex-row md:items-center  md:justify-evenly gap-6 px-4 w-full mt-10 mb-6 ">
        {/* Search bar */}
  

      {/* Brand Filter Buttons */}
       <div className="max-w-3xl w-full">
        <div ref={searchRef} className="relative">
          <div
            className={`flex items-center gap-3 px-6 py-4 rounded-full shadow-lg transition-all duration-300 ${
              showDropdown ? "rounded-b-none shadow-xl" : ""
            } ${
              theme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200 hover:shadow-xl"
            }`}
          >
            <Search
              className={`w-5 h-5 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => query && setShowDropdown(true)}
              placeholder="Search for Business laptops..."
              className={`flex-1 text-lg outline-none bg-transparent ${
                theme === "dark"
                  ? "text-white placeholder-gray-400 border-none"
                  : "text-gray-800 placeholder-gray-500 border-none"
              }`}
            />
            {query && (
              <button
                onClick={() => {
                  setQuery("");
                  setShowDropdown(false);
                }}
                className={`text-2xl hover:bg-gray-200 rounded-full p-1 transition-colors ${
                  theme === "dark"
                    ? "text-gray-400 hover:bg-gray-700"
                    : "text-gray-500"
                }`}
              >
                ×
              </button>
            )}
          </div>

          {/* Dropdown */}
          {showDropdown && filteredSuggestions.length > 0 && (
            <div
              className={`absolute w-full z-50 rounded-b-3xl shadow-2xl overflow-hidden ${
                theme === "dark"
                  ? "bg-gray-800 border-t border-gray-700"
                  : "bg-white border-t border-gray-200"
              }`}
            >
              {filteredSuggestions.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleSuggestionClick(product)}
                  className={`w-full flex items-center gap-4 px-6 py-4 transition-colors ${
                    theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-50"
                  }`}
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-16 h-16 object-contain rounded-lg bg-gray-100"
                  />
                  <div className="flex-1 text-left">
                    <h3
                      className={`font-semibold text-lg ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lg font-bold text-indigo-600">
                        ${product.price}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${
                          theme === "dark"
                            ? "bg-blue-900 text-blue-300"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        ★ {product.rating}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* No results in dropdown */}
          {showDropdown && filteredSuggestions.length === 0 && query && (
            <div
              className={`absolute w-full z-50 rounded-b-3xl shadow-2xl px-6 py-8 text-center ${
                theme === "dark"
                  ? "bg-gray-800 border-t border-gray-700"
                  : "bg-white border-t border-gray-200"
              }`}
            >
              <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
                No results found for "{query}"
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3 px-4">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => setSelectedBrand(brand)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              selectedBrand === brand
                ? theme === "dark"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600  shadow-lg"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600  shadow-lg"
                : theme === "dark"
                ? "bg-gray-800  border border-gray-700 hover:bg-gray-700"
                : "bg-gray-100  border border-gray-300 hover:bg-gray-200"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>
      </div>

      {/* Product Grid */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        {currentProducts.length > 0 ? (
          currentProducts.map((card) => (
            <div
              key={card.id}
              className={`flex flex-col justify-between rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                theme === "dark"
                  ? "bg-gradient-to-tr from-gray-900 via-gray-950 to-black border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <img
                className="p-6 rounded-t-2xl w-full h-64 object-contain bg-transparent"
                src={card.img}
                alt={card.title}
              />
              <div className="px-6 pb-6 flex flex-col flex-grow">
                <h1
                  className={`text-[1.5rem] font-bold ${
                    theme === "dark" ? "text-indigo-400" : "text-black"
                  }`}
                >
                  {card.title}
                </h1>
                <h5 className="font-semibold mb-3 leading-snug line-clamp-2">
                  {card.desc}
                </h5>
                <div className="flex items-center mt-2.5 mb-5">
                  {card.stars.map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-4 h-4 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                  <span
                    className={`ml-3 text-xs font-semibold px-2.5 py-0.5 rounded ${
                      theme === "dark"
                        ? "bg-blue-900 text-blue-300"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {card.rating}
                  </span>
                </div>
                <div className="mt-auto flex items-center justify-between gap-2">
                  <span className="text-2xl font-bold">${card.price}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedProduct(card)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        theme === "dark"
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    >
                      View more
                    </button>
                    <button
                      onClick={() => addToCart(card)}
                      className={`p-3 rounded-full transition-all duration-200 ${
                        theme === "dark"
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-green-500 hover:bg-green-600"
                      } text-white`}
                    >
                      <FaCartShopping />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-lg opacity-70 py-10">
            No products found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-3">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
              currentPage === 1
                ? "bg-black text-white cursor-not-allowed opacity-80"
                : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md hover:shadow-xl hover:scale-105"
            }`}
          >
            ← Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === index + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-black text-white cursor-not-allowed opacity-80"
                : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md hover:shadow-xl hover:scale-105"
            }`}
          >
            Next →
          </button>
        </div>
      )}

      {selectedProduct && (
        <CardModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Business;