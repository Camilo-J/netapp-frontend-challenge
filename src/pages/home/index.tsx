import { useState } from "react";
import { CameraOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CustomSidebar } from "@/components/organism/Sidebar";
import { usePhotoStore } from "@/store/photo";
import { ImageSkeleton } from "./components/molecules/ImageSkeleton";

export function HomePage() {
  const photos = usePhotoStore((state) => state.photos);
  const filterSelected = usePhotoStore((state) => state.filterSelected);
  const [loadingPhotos, setLoadingPhotos] = useState(
    !photos.length ? Array(photos.length).fill(true) : []
  );

  const handleImageLoad = (index: number) => {
    setLoadingPhotos((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };

  return (
    <div className="flex h-screen">
      <CustomSidebar />
      <div className="flex-1 p-4 overflow-auto">
        {!photos.length && (
          <div className="h-full flex gap-4 justify-center items-center">
            <CameraOff />
            <p className="text-gray-600 font-medium">Type to search images</p>
          </div>
        )}

        {Boolean(photos.length) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {photos.map(({ src, alt }, index) => (
              <Card key={index}>
                <CardContent className="p-2">
                  {loadingPhotos[index] && <ImageSkeleton />}

                  {!loadingPhotos[index] && (
                    <img
                      src={
                        src[(filterSelected as keyof typeof src) || "medium"]
                      }
                      alt={alt}
                      className="w-full h-48 object-cover rounded hover:scale-95 transition-transform duration-500"
                      onLoad={() => handleImageLoad(index)}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
