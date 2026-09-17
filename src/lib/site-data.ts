import exterior from "@/assets/image.png.asset.json";
import bathroom from "@/assets/image-2.png.asset.json";
import balcony from "@/assets/image-3.png.asset.json";
import windowView from "@/assets/image-4.png.asset.json";
import room from "@/assets/image-5.png.asset.json";
import panorama from "@/assets/image-6.png.asset.json";
import morningTea from "@/assets/image-7.png.asset.json";
import valley from "@/assets/image-8.png.asset.json";
import orchard from "@/assets/image-9.png.asset.json";

export const details = {
  name: "Paradise Homestay Kalpa",
  phone: "+91 82198 86774",
  phoneDigits: "918219886774",
  address: "Rakpa, House No. 56, Kalpa, Saryo, Himachal Pradesh 172108",
  rating: "4.9",
  reviews: "71",
  price: "₹2,309",
};

export const photos = {
  exterior: exterior.url,
  bathroom: bathroom.url,
  balcony: balcony.url,
  windowView: windowView.url,
  room: room.url,
  panorama: panorama.url,
  morningTea: morningTea.url,
  valley: valley.url,
  orchard: orchard.url,
};

export const gallery = [
  { src: photos.balcony, alt: "Panoramic balcony view of the snow-covered Kinner Kailash range", label: "The view from Paradise" },
  { src: photos.room, alt: "Warm wooden guest room with a mountain-view window", label: "Wooden mountain-view room" },
  { src: photos.exterior, alt: "Exterior of Paradise Homestay Kalpa among tall Himalayan trees", label: "Paradise Homestay" },
  { src: photos.morningTea, alt: "Guest enjoying morning tea while looking at the snowy mountains", label: "Tea with the peaks" },
  { src: photos.orchard, alt: "Fresh Kinnaur apples held in an orchard below the snow peaks", label: "Kinnaur apple orchard" },
  { src: photos.panorama, alt: "Wide Himalayan mountain panorama from the homestay balcony", label: "Kinner Kailash panorama" },
  { src: photos.windowView, alt: "Snow mountain view from a guest room window and balcony", label: "Wake up to this" },
  { src: photos.bathroom, alt: "Clean attached bathroom with hot-water geyser", label: "Clean attached bath" },
  { src: photos.valley, alt: "Green valley and snowy Kinnaur mountains near the homestay", label: "Across the valley" },
];

export function whatsappUrl(message = "Namaste! I would like to enquire about a stay at Paradise Homestay Kalpa.") {
  return `https://wa.me/${details.phoneDigits}?text=${encodeURIComponent(message)}`;
}

export const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent("Paradise Homestay Kalpa, Rakpa, Himachal Pradesh 172108")}&output=embed`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Paradise Homestay Kalpa, Rakpa, Himachal Pradesh 172108")}`;

export function pageHead(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
