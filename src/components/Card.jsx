import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ image, title, artist, album, link }) => {
  return (
    <Link href={link}>
      <div className="max-w-sm bg-white bg-opacity-5 border-gray-200 rounded-lg shadow transform transition duration-500 hover:scale-110">
        <div className="px-4 py-4">
          <div className="flex justify-center">
            <Image
              className="h-128 w-128 rounded-md"
              src={image}
              alt=""
              width={512}
              height={512}
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
            <p className="mt-2 text-lg text-gray-600">{artist}</p>
            <p className="mt-2 text-lg text-gray-600">{album}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
