import Image from "next/image";
import DarkLogo from "./assets/darklogo.svg";
import Jean from "./assets/Jean_Pierre.svg";
import Toni from "./assets/Toni_Vanwinkle.svg";
import Joan from "./assets/Joanna_Ngai.svg";
import photo1 from "./assets/photo1.svg";
import Placeholder from "./assets/Placeholder.svg";
import Placeholder1 from "./assets/Placeholder (1).svg";
import Placeholder2 from "./assets/Placeholder (2).svg";
import Placeholder3 from "./assets/Placeholder (3).svg";
import Placeholder4 from "./assets/Placeholder (4).svg";
import Placeholder5 from "./assets/Placeholder (5).svg";
import linkedin from "./assets/linkedin.svg";
import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import NavBar from "./components/NavBar";
import LatestArticle from "./components/LatestArticle";
import ArticlePreview from "./components/ArticlePreview";
import Input from "./components/InputFields";
import { Fragment } from "react";
import Link from "next/link";
import NewsLetters from "./components/NewsLetter";

type Article = {
  title: string;
  imagePreview: string; // You can refine this to `StaticImageData` if using `next/image`
  TextPreview: string;
  publisherImage: string;
  PublisherName: string;
  PublicationDate: Date;
  ReadTime: number;
};

const articleData: Article[] = [
  {
    title: "Why Becoming a Tech Entrepreneur Is The Next Step of Your Career",
    imagePreview: photo1,
    TextPreview:
      "You’ve probably started your career in the software industry about five or maybe even ten years ago. Your first steps were as a software developer, UX designer, product manager or maybe some of the others engineering or ...",
    publisherImage: Jean,
    PublisherName: "Jean Pierre",
    PublicationDate: new Date("2024-08-17"),
    ReadTime: 5,
  },
  {
    title: "The Role of Passion and Purpose in Entrepreneurship",
    imagePreview: Placeholder,
    TextPreview:
      "Talking with aspiring and early tech entrepreneurs we’ve found out time and time again that often the real meaning of passion and purpose is misunderstood...",
    publisherImage: Toni,
    PublisherName: "Toni Vanwinkle",
    PublicationDate: new Date("2024-08-17"),
    ReadTime: 10,
  },
  {
    title: "How to Have Good Startup Ideas",
    imagePreview: Placeholder1,
    TextPreview:
      "You’ve probably started your career in the software industry about five or maybe even ten years ago. Your first steps were as a software developer, UX designer, product manager or ...",
    publisherImage: Toni,
    PublisherName: "Toni Vanwinkle",
    PublicationDate: new Date("2024-08-07"),
    ReadTime: 10,
  },
  {
    title: "The #1 Root Cause Startups Fail",
    imagePreview: Placeholder2,
    TextPreview:
      "The success rate of startups is very low - 9 out of 10 startups fail. And that has been the case for years...",
    publisherImage: Toni,
    PublisherName: "Toni Vanwinkle",
    PublicationDate: new Date("2024-08-07"),
    ReadTime: 10,
  },
  {
    title: "Why Entrepreneurs Should Be Celebrated",
    imagePreview: Placeholder3,
    TextPreview:
      "Entrepreneurship in the true sense of the word is an act of creation and innovation. An act of providing something of value to the world which is so g...",
    publisherImage: Joan,
    PublisherName: "Joanna Ngai",
    PublicationDate: new Date("2024-07-26"),
    ReadTime: 7,
  },
  {
    title: "You Can Be an Entrepreneur! Period.",
    imagePreview: Placeholder4,
    TextPreview:
      "This is not an article on how to become an entrepreneur. It is an article on whether you can actually be one. There is a widespread belief that entre...",
    publisherImage: Toni,
    PublisherName: "Toni Vanwinkle",
    PublicationDate: new Date("2024-08-07"),
    ReadTime: 10,
  },
  {
    title: "Why Becoming a Tech Entrepreneur Is The Next Step of Your Career",
    imagePreview: Placeholder5,
    TextPreview:
      "You’ve probably started your career in the software industry about five or maybe even ten years ago. Your first steps were as a software developer, UX...",
    publisherImage: Joan,
    PublisherName: "Joanna Ngai",
    PublicationDate: new Date("2024-07-26"),
    ReadTime: 7,
  },
];

const newestArticle = [...articleData].sort(
  (a, b) => b.PublicationDate.getTime() - a.PublicationDate.getTime()
);

export default function Home() {
  return (
    <>
      <NavBar />
      <NewsLetters />
      <div className="bg-(--light-blue-background)">
        <LatestArticle article={newestArticle[0]} />
      </div>

      {/* Other Stories */}
      <div className="flex flex-col p-10 mx-auto">
        <div className="flex justify-between max-w-[1250px] w-full mx-auto flex-wrap">
          <div className="w-[896px] flex flex-col gap-y-[60px] lg:gap-y-[48px]">
            <h3 className="text-(--base-text) font-bold text-[30px] leading-[45px]">
              Other Stories
            </h3>
            {articleData.slice(1).map((article, index) => (
              <Fragment key={index}>
                <ArticlePreview
                  title={article.title}
                  image={article.imagePreview}
                  previewText={article.TextPreview}
                  publisherImage={article.publisherImage}
                  PublisherName={article.PublisherName}
                  PublicationDate={article.PublicationDate}
                  ReadTime={article.ReadTime}
                ></ArticlePreview>
              </Fragment>
            ))}
          </div>

          <div className="hidden xl:block">
            <h6 className="font-bold text-[18px] text-(--base-text) pb-[10px]">
              Latest Stories in your inbox
            </h6>
            <p className="w-[240px] h-[63px]">
              Subscribe to get our expert- <br /> written articles in your inbox
              every week
            </p>
            <Input name={"Email"} />
            <Input name={"First Name"} />
            <Input name={"Last Name"} />
            <Input name={"Job Title"} />
            <button className="bg-(--yellow-button-background) w-[90px] h-[32px] font-bold text-(--base-text) rounded-sm cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex max-w-[1250px] mx-auto items-center md:justify-start justify-center px-10 xl:px-0">
        <Link href="#" className="mx-1 px-[9px] py-[5px] font-bold opacity-60">
          Previous
        </Link>
        <Link
          href="#"
          className="mx-1 px-[9px] py-[5px] font-bold text-center hover:bg-gray-200 rounded-sm w-[32px h-[32px]"
        >
          1
        </Link>
        <Link
          href="#"
          className="mx-1 px-[9px] py-[5px] font-bold text-center hover:bg-gray-200 rounded-sm w-[32px h-[32px]"
        >
          2
        </Link>
        <Link
          href="#"
          className="mx-1 px-[9px] py-[5px] font-bold text-center hover:bg-gray-200 rounded-sm w-[32px h-[32px]"
        >
          3
        </Link>
        <Link
          href="#"
          className="mx-1 px-[9px] py-[5px] font-bold text-center hover:bg-gray-200 rounded-sm w-[32px h-[32px]"
        >
          4
        </Link>
        <Link
          href="#"
          className="mx-1 px-[9px] py-[5px] font-bold text-center hover:bg-gray-200 rounded-sm w-[32px h-[32px]"
        >
          5
        </Link>
        <Link href="#" className="mx-1 px-[9px] py-[5px] font-bold text-center">
          Next
        </Link>
      </div>

      <footer className="flex flex-wrap gap-y-10 justify-between pb-5 lg:gap-y-0 w-full max-w-[1250px] mx-auto mt-[112px] px-10 xl:px-0 text-[12px] lg:text-(--base-text)">
        <div className="flex flex-col gap-y-2">
          <Image src={DarkLogo} alt="darkLogo" width={108} height={48} />
          <p>Terms of Use | Privacy Policy | Cookie Policy</p>
          <p>Copyright © 2025, Brand Works SA. All Rights Reserved.</p>
        </div>
        <div className="flex gap-x-6">
          <div className="flex flex-col justify-center text-[12px] gap-y-[12px] lg:text[14px]">
            <h6 className="font-bold">Quick Links</h6>
            <p>Brand Works Platform</p>
            <p>Blog</p>
            <div className="flex gap-3">
              <Image src={linkedin} alt="linkedin" />
              <Image src={facebook} alt="facebook" />
              <Image src={twitter} alt="X" />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-y-[12px] text-[12px] lg:text-[14px]">
            <h6>CONTACTS</h6>
            <p>info@brandworks.com</p>
            <p>
              31 Brand Works Blvd. <br /> 1000, Paris, France
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
