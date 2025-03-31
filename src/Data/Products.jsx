import screen from "../Images/screen-image.png";

const products = {
  monitors: [
    {
      id: 1,
      name: "LG UltraGear 27GN950",
      price: "4 500 000",
      brand: "LG",
      image: screen,
      shortDescription:
        "Yuqori sifatli 4K monitor, geymerlar uchun ideal tanlov.",
      fullDescription:
        "HyperX Cloud Alpha — это игровая гарнитура с двухкамерными динамиками, широким и удобным ободом, большими амбушюрами, а также съемным микрофоном с функцией подавление шума. Двухкамерные динамикиДинамики — один из самых важных компонентов начинки любых наушников и потому разработчики из HyperX тщательно проработали эту делать. В гарнитуре установлены двухкамерные излучатели, которые звучат четко и без искажений, а всё за счёт своей конструкции. А еще в них хорошо разграничиваются низкие, средние и высокие частоты. Снова же из-за двух отдельных камер. Первая отвечает за басы, а вторая за средние и высокие частоты — за счет этого звук становится чистым, сбалансированным и более качественным. Поэтому модель Cloud Alpha и завоевала популярность среди сотен тысяч геймеров по всему миру, это настоящая классика киберспортивной периферии.",
      specs: {
        Тип: "Monitor",
        Конструкция: "27 dyuym",
        Максимальнаявоспроизводимаячастота: "4K UHD (3840x2160)",
        Технология: "144 Гц",
        Системаактивногошумоподавления: "1 мс",
        Минимальнаявоспроизводимаячастота: "Nano IPS",
      },
    },
    {
      id: 2,
      name: "ASUS ROG Swift PG259QN",
      price: "650",
      brand: "ASUS",
      image: "/images/asus-rog.jpg",
      shortDescription: "Tezlik va aniqlik uchun yaratilgan 360 Gts monitor.",
      fullDescription:
        "ASUS ROG Swift PG259QN — bu dunyodagi eng tezkor monitorlardan biri bo‘lib, 360 Gts yangilanish tezligiga ega. 24.5 dyuymli Full HD (1920x1080) Fast IPS paneli 1 ms javob vaqti bilan o‘yinlarda maksimal aniqlikni ta’minlaydi. HDR10 qo‘llab-quvvatlashi va G-Sync texnologiyasi bilan bu monitor kibersportchilar uchun eng yaxshi tanlovdir.",
      specs: {
        type: "Monitor",
        size: "24.5 dyuym",
        resolution: "Full HD (1920x1080)",
        refreshRate: "360 Гц",
        responseTime: "1 мс",
        panelType: "Fast IPS",
      },
    },
    {
      id: 3,
      name: "MSI Optix MAG274QRF",
      price: "400",
      brand: "MSI",
      image: "/images/msi-optix.jpg",
      shortDescription: "Qulay narxda yuqori unumdorlikdagi monitor.",
      fullDescription:
        "MSI Optix MAG274QRF — 27 dyuymli WQHD (2560x1440) Rapid IPS paneliga ega monitor. 165 Gts yangilanish tezligi va 1 ms javob vaqti bilan u o‘yinlar va multimedia uchun ajoyib tanlovdir. Night Vision funksiyasi qorong‘i joylarda ko‘rinishni yaxshilaydi, FreeSync Premium esa silliq tasvirni ta’minlaydi.",
      specs: {
        type: "Monitor",
        size: "27 dyuym",
        resolution: "WQHD (2560x1440)",
        refreshRate: "165 Гц",
        responseTime: "1 мс",
        panelType: "Rapid IPS",
      },
    },
    // Qolgan monitorlar uchun misol (qisqartirib yozaman)
    {
      id: 4,
      name: "LG UltraGear 27GN950",
      price: "500",
      brand: "LG",
      image: "/images/lg-ultragear.jpg",
      shortDescription: "4K o‘yin monitori.",
      fullDescription:
        "LG UltraGear 27GN950 — yuqori sifatli 4K monitor, 144 Gts bilan.",
      specs: {
        type: "Monitor",
        size: "27 dyuym",
        resolution: "4K UHD (3840x2160)",
        refreshRate: "144 Гц",
        responseTime: "1 мс",
        panelType: "Nano IPS",
      },
    },
    {
      id: 5,
      name: "ASUS ROG Swift PG259QN",
      price: "650",
      brand: "ASUS",
      image: "/images/asus-rog.jpg",
      shortDescription: "360 Gts tezkor monitor.",
      fullDescription:
        "ASUS ROG Swift PG259QN — kibersport uchun 360 Gts monitor.",
      specs: {
        type: "Monitor",
        size: "24.5 dyuym",
        resolution: "Full HD (1920x1080)",
        refreshRate: "360 Гц",
        responseTime: "1 мс",
        panelType: "Fast IPS",
      },
    },
    {
      id: 6,
      name: "MSI Optix MAG274QRF",
      price: "400",
      brand: "MSI",
      image: "/images/msi-optix.jpg",
      shortDescription: "Yuqori sifatli WQHD monitor.",
      fullDescription:
        "MSI Optix MAG274QRF — o‘yin va ish uchun mos 165 Gts monitor.",
      specs: {
        type: "Monitor",
        size: "27 dyuym",
        resolution: "WQHD (2560x1440)",
        refreshRate: "165 Гц",
        responseTime: "1 мс",
        panelType: "Rapid IPS",
      },
    },
    {
      id: 7,
      name: "LG UltraGear 27GN950",
      price: "500",
      brand: "LG",
      image: "/images/lg-ultragear.jpg",
      shortDescription: "4K o‘yin monitori.",
      fullDescription:
        "LG UltraGear 27GN950 — yuqori sifatli 4K monitor, 144 Gts bilan.",
      specs: {
        type: "Monitor",
        size: "27 dyuym",
        resolution: "4K UHD (3840x2160)",
        refreshRate: "144 Гц",
        responseTime: "1 мс",
        panelType: "Nano IPS",
      },
    },
    {
      id: 8,
      name: "ASUS ROG Swift PG259QN",
      price: "650",
      brand: "ASUS",
      image: "/images/asus-rog.jpg",
      shortDescription: "360 Gts tezkor monitor.",
      fullDescription:
        "ASUS ROG Swift PG259QN — kibersport uchun 360 Gts monitor.",
      specs: {
        type: "Monitor",
        size: "24.5 dyuym",
        resolution: "Full HD (1920x1080)",
        refreshRate: "360 Гц",
        responseTime: "1 мс",
        panelType: "Fast IPS",
      },
    },
    {
      id: 9,
      name: "MSI Optix MAG274QRF",
      price: "400",
      brand: "MSI",
      image: "/images/msi-optix.jpg",
      shortDescription: "Yuqori sifatli WQHD monitor.",
      fullDescription:
        "MSI Optix MAG274QRF — o‘yin va ish uchun mos 165 Gts monitor.",
      specs: {
        type: "Monitor",
        size: "27 dyuym",
        resolution: "WQHD (2560x1440)",
        refreshRate: "165 Гц",
        responseTime: "1 мс",
        panelType: "Rapid IPS",
      },
    },
  ],
  desks: [
    {
      id: 1,
      name: "Gaming Desk ROG",
      price: "300",
      brand: "ROG",
      image: "/images/gaming-desk.jpg",
      shortDescription: "Geymerlar uchun qulay stol.",
      fullDescription:
        "Gaming Desk ROG — bu o‘yin ixlosmandlari uchun maxsus ishlab chiqilgan ergonomik stol. Keng yuzasi monitor, klaviatura va boshqa aksessuarlarni joylashtirish uchun yetarli joy beradi. RGB yoritish tizimi bilan jihozlangan bo‘lib, o‘yin muhitini yanada jozibador qiladi.",
      specs: {
        type: "Gaming Desk",
        dimensions: "150x75x75 sm",
        material: "Metall va MDF",
        rgbLighting: "Bor",
        weightCapacity: "100 kg",
      },
    },
    {
      id: 2,
      name: "Cougar Mars Pro 150",
      price: "450",
      brand: "Cougar",
      image: "/images/cougar-mars.jpg",
      shortDescription: "Professional geyming stoli.",
      fullDescription:
        "Cougar Mars Pro 150 — bu mustahkam va zamonaviy dizaynga ega geyming stoli. 150 sm kengligi va balandligi sozlanishi imkoniyati bilan u har qanday o‘yin setupiga mos keladi. Stolning o‘ng va chap tomonlarida USB portlari va RGB yoritish mavjud.",
      specs: {
        type: "Gaming Desk",
        dimensions: "150x77x75 sm",
        material: "Po‘lat va yog‘och",
        rgbLighting: "Bor",
        features: "USB portlar, balandlik sozlanishi",
      },
    },
  ],
};

export default products;
