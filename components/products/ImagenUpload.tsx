"use client";

import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";
import Image from "next/image";
import { useState } from "react";

export default function ImagenUpload() {
  const [imageUrl, setImageUrl] = useState("");
  const uploadPreset = "ml_default";

  return (
    <CldUploadWidget
      onSuccess={(result, { widget }) => {
        if (result.event === "success") {
          widget.close();
          //@ts-expect-error: result.info might be undefined
          setImageUrl(result.info?.secure_url);
        }
      }}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => (
        <>
          <div className="space-y-2">
            <label className="text-slate-800">Imagen Producto</label>
            <div
              className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100"
              onClick={() => open()}
            >
              <TbPhotoPlus size={50} className="text-4xl text-slate-800" />
              <p className="text-lg font-semibold">Agregar Imagen</p>

              {imageUrl && (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    fill
                    style={{ objectFit: "contain" }}
                    src={imageUrl}
                    alt="Imagen del producto"
                  />
                </div>
              )}
            </div>
          </div>
          <input
            type="hidden"
            name="imagen"
            value={imageUrl}
           
            />
        </>
      )}
    </CldUploadWidget>
  );
}
