import Image from "next/image";

type article = {
  title: string;
  imagePreview: string;
  publisherImage: string;
  TextPreview: string;
  PublisherName: string;
  ReadTime: number;
  PublicationDate: Date;
};

export default function LatestArticle({ article }: { article: article }) {
  const {
    title,
    imagePreview,
    publisherImage,
    TextPreview,
    PublisherName,
    ReadTime,
    PublicationDate,
  } = article;

  const day = PublicationDate.toString()
    .slice(4, 7)
    .concat(
      " ",
      PublicationDate.toString().slice(8, 9) === "0"
        ? PublicationDate.toString().slice(9, 10)
        : PublicationDate.toString().slice(8, 10)
    );

  return (
    <>
      <section className="py-10 max-w-[1250px] mx-auto px-4 lg:p-10 xl:px-0">
        <h3 className="font-bold text-2xl md:text-3xl mb-8">Latest Article</h3>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[45%]">
            <Image
              src={imagePreview}
              alt={title}
              width={458}
              height={240}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="w-full lg:w-[55%] flex flex-col justify-between gap-6">
            <h4 className="font-semibold text-xl md:text-2xl">{title}</h4>
            <p className="text-base leading-relaxed text-wrap">{TextPreview}</p>

            <div className="flex justify-between items-center pt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Image
                  src={publisherImage}
                  alt={PublisherName}
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <span>{PublisherName}</span>
              </div>
              <div>
                {day} • {ReadTime} min
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
