import Image from "next/image";
import Link from "next/link";
import nh from "../public/nh.jpg";
import nhLogo from "../public/nhLogo.png";

export default function Home() {
  return (
    <div className="flex ">
      <div className="py-3 px-8">
        <Image
          className="mx-10 rounded-full "
          src={nh}
          width={100}
          height={100}
          alt="Cat Picture"
        />
        <p className="px-8 text-gray-400 font-serif text-3xl">Nadeem</p>
        <p className="px-8 text-orange-300 font-serif text-2xl">Hussain</p><br />
        <p>UI/UX/DESIGNER</p>
        <br />
        <div>
          <ul className="text-center">
            <li className="hover:text-blue-600 hover:cursor-pointer hover:underline hover:text-lg">
              Home
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer hover:underline hover:text-lg">
              About
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer hover:underline hover:text-lg">
              Services
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer hover:underline hover:text-lg">
              Skills
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer hover:underline hover:text-lg">
              Education
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer hover:underline hover:text-lg">
              Expirence
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer hover:underline hover:text-lg">
              Work
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer hover:underline hover:text-lg">
              Blog
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer hover:underline hover:text-lg">
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="container relative text-center px-20 py-0">
          <Image
            className=""
            src={nhLogo}
            width={1000}
            height={800}
            alt="designed logo pic"
          />
          <div>
            <h1 className="font-serif absolute top-96 left-32 text-center font-bold text-4xl">
              I am <br /> a Designer
            </h1>
          </div>
          <div className="font-serif absolute top-3/4 ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              perspiciatis sequi provident reiciendis fugit tenetur?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda alias quod cumque non odio soluta dicta nesciunt nam
              laborum ratione. Debitis dicta, neque doloremque, quod quasi aut
              velit quidem, explicabo obcaecati ex sint vero. Optio?
            </p>
            <br />
            <button className="bg-blue-600 hover:border-s rounded-lg p-2 hover:text-white cursor-pointer">
              learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
