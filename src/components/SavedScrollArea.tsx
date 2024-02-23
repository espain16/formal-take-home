import * as React from "react";
import Image, { StaticImageData } from "next/image";
import imageGallery from "../image/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface SavedCardItem {
  cardTitle: string;
  upDatedLast: string;
  logInfo: string;
  visualTitle: string;
  image: {
    src: string;
    height: number;
    width: number;
  };
  totalViews?: string;
  date?: string;
}

export const cards: SavedCardItem[] = [
  {
    cardTitle: "Access",
    upDatedLast: "Updated 15 minutes ago",
    logInfo: "12 New Logs since update",
    visualTitle: "Access over 30 days",
    image: imageGallery.image2,
    totalViews: "Total views  3,057 24%",
  },
  {
    cardTitle: "Observability",
    upDatedLast: "Updated 15 minutes ago",
    logInfo: "12 New Logs since update",
    visualTitle: "Queries in database",
    image: imageGallery.image3,
    date: "Jan 2, 08:18:00",
  },
  {
    cardTitle: "Sidecars",
    upDatedLast: "Updated 15 minutes ago",
    logInfo: "12 New Logs since update",
    visualTitle: "Queries in database",
    image: imageGallery.image3,
    date: "Jan 2, 08:18:00",
  },
  {
    cardTitle: "Logs",
    upDatedLast: "Updated 15 minutes ago",
    logInfo: "12 New Logs since update",
    visualTitle: "Logs / Time",
    image: imageGallery.image1,
    date: "Jan 2, 08:18:00",
  },
];

export default function SavedScrollArea() {
  return (
    <div>
      <h2 className="section-header saved-h2 pt-5 pb-5">Saved</h2>
      <ScrollArea className="h-[300px] w-full pl-6">
        <div className="dashboard-items flex w-max space-x-4 p-6">
          {cards.map((savedCardItem) => (
            <Card
              className="dashboard-item card-styles"
              key={savedCardItem.cardTitle}
            >
              <div className="left-side">
                <CardHeader>
                  <CardTitle className="card-title">
                    {savedCardItem.cardTitle}
                  </CardTitle>
                  <CardDescription className="card-description">
                    {savedCardItem.upDatedLast}
                  </CardDescription>
                  <CardDescription className="info-details">
                    {savedCardItem.logInfo}
                  </CardDescription>
                </CardHeader>
              </div>
              <div className="visual-aid-card">
                <CardContent>
                  <CardDescription className="visual-aid-card-header">
                    {savedCardItem.visualTitle}
                  </CardDescription>
                  <Image className="image" src={savedCardItem.image} alt="" />
                  <CardDescription className="visual-aid-card-description">
                    {savedCardItem.date || savedCardItem.totalViews}
                  </CardDescription>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

// export interface Artwork {
//   artist: string
//   art: string
// }

// export const works: Artwork[] = [
//   {
//     artist: "Ornella Binni",
//     art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     artist: "Tom Byrom",
//     art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     artist: "Vladimir Malyavko",
//     art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
//   },
// ]

// export function ScrollAreaHorizontalDemo() {
//   return (
//     <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
//       <div className="flex w-max space-x-4 p-4">
//         {works.map((artwork) => (
//           <figure key={artwork.artist} className="shrink-0">
//             <div className="overflow-hidden rounded-md">
//               <Image
//                 src={artwork.art}
//                 alt={`Photo by ${artwork.artist}`}
//                 className="aspect-[3/4] h-fit w-fit object-cover"
//                 width={300}
//                 height={400}
//               />
//             </div>
//             <figcaption className="pt-2 text-xs text-muted-foreground">
//               Photo by{" "}
//               <span className="font-semibold text-foreground">
//                 {artwork.artist}
//               </span>
//             </figcaption>
//           </figure>
//         ))}
//       </div>
//       <ScrollBar orientation="horizontal" />
//     </ScrollArea>
//   )
// }
