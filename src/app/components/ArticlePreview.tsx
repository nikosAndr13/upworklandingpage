import Image from "next/image";

export default function ArticlePreview({
  title,
  image,
  previewText,
  publisherImage,
  PublisherName,
  PublicationDate,
  ReadTime,
}: {
  title: string;
  image: string;
  previewText: string;
  publisherImage: string;
  PublicationDate: Date;
  PublisherName: string;
  ReadTime: number;
}) {
  const day = PublicationDate.toString()
    .slice(4, 7)
    .concat(
      " ",
      PublicationDate.toString().slice(8, 9) === "0"
        ? PublicationDate.toString().slice(9, 10)
        : PublicationDate.toString().slice(8, 10)
    );

  return (
    <div className="text-(--base-text) flex flex-col gap-4">
      <h5 className="font-semibold text-xl md:text-[21px] leading-[32px]">
        {title}
      </h5>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-[260px]">
          <Image
            src={image}
            alt="image"
            width={260}
            height={137}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        <div className="flex flex-col justify-between flex-1 gap-4">
          <p className="text-(--base-text) leading-relaxed">{previewText}</p>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Image
                src={publisherImage}
                alt={publisherImage}
                width={36}
                height={36}
                className="rounded-full"
              />
              <span>{PublisherName}</span>
            </div>
            <div className="opacity-70">
              {day} • {ReadTime} min read
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
