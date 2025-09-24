import Image from "next/image";
import { strict } from "node:assert";

interface OrganizerData {
  Team: string;
  Profile: ProfileData[];
}

interface ProfileData {
  image: string;
  name: string;
  Tag?: string;
}

interface ProfileProps {
  image: string;
  name: string;
  Tag?: string;
}

const OrganizerData: OrganizerData[] = [
  {
    Team: "",
    Profile: [
      {
        image: "/Organiser/core/hen.png",
        name: "Henba",
        Tag: "Curator & Licensee",
      },
      {
        image: "/Organiser/core/ansil.png",
        name: "Ansil",
        Tag: "Co-curator",
      },
    ],
  },
  {
    Team: "Speaker Curation",
    Profile: [
      {
        image: "/Organiser/speakerCuration/Kanishka.png",
        name: "Kanishka",
      },
      {
        image: "/Organiser/speakerCuration/Poonam.png",
        name: "Poonam",
      },
      {
        image: "/Organiser/speakerCuration/Meghana.png",
        name: "Meghana",
      },
      {
        image: "/Organiser/speakerCuration/Spoorthi.png",
        name: "Sporthi",
      },
      {
        image: "/Organiser/speakerCuration/Nikita.png",
        name: "Nikita",
      },
    ],
  },
  {
    Team: "Promotion Marketing",
    Profile: [
      
      {
        image: "/Organiser/Promotion&Marketing/AdvithSuvarn.png",
        name: "Advith Suvarn",
      },
      {
        image: "/Organiser/Promotion&Marketing/Keeshalya.png",
        name: "Keeshalya",
      },
      {
        image: "/Organiser/Promotion&Marketing/Suraksha.png",
        name: "Suraksha",
      },
      {
        image: "/Organiser/Promotion&Marketing/Tejesvin.png",
        name: "Tejesvin",
      },
    ],
  },
  {
    Team: "Visual Designer",
    Profile: [
      {
        image: "/Organiser/FinanceVisualDesigner/Dhanraj.png",
        name: "Dhanraj",
      },
    ],
  },
  {
    Team: "Finance",
    Profile: [
      {
        image: "/Organiser/FinanceVisualDesigner/Swapnil.png",
        name: "Swapnil",
      },
    ],
  },
  {
    Team: "Social Media",
    Profile: [
      {
        image: "/Organiser/SocialMedia/Bharath.png",
        name: "Bharath",
      },
      {
        image: "/Organiser/SocialMedia/Vinith.png",
        name: "Vinith",
      },
      {
        image: "/Organiser/SocialMedia/Viraj.png",
        name: "Viraj",
      },
      {
        image: "/Organiser/SocialMedia/Khyati.png",
        name: "Khyati",
      },
      {
        image: "/Organiser/SocialMedia/Sakshi.png",
        name: "Sakshi",
      },
    ],
  },
  {
    Team: "Volunteers",
    Profile: [
      {
        image: "",
        name: "",
      },
    ],
  },
];

function Profile({ image, name, Tag }: ProfileProps) {
  return (
    <div className="w-[150px]  text-center">
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        className="grayscale"
      />
      <p className="pt-2 text-white font-bold">{name}</p>
      <p className="pt-2 text-ted-red font-bold">{Tag}</p>
    </div>
  );
}

export default function Organizer() {
  return (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center py-16">
      <h3 className="text-5xl sm:text-6xl md:text-4xl lg:text-6xl uppercase text-white font-extrabold tracking-tight flex items-baseline justify-center gap-2 mb-10 mt-[30] md:mt-[100px]">
        Organizers
      </h3>
      <div className="w-[900px] flex flex-col gap-16  ">
        {OrganizerData.map((organizerData, teamIndex) => (
          <div
            key={teamIndex}
            className="flex flex-col justify-center items-center text-center "
          >
            <h1 className=" w-full mx-0 text-4xl sm:text-5xl md:text-3xl lg:text-5xl Uppercase text-white font-extrobold  mb-6">
              {organizerData.Team}
            </h1>
            <div className="flex gap-10">
              {organizerData.Profile.map((profileData, profileIndex) => (
                <Profile
                  key={profileIndex}
                  image={profileData.image}
                  name={profileData.name}
                  Tag={profileData.Tag}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
