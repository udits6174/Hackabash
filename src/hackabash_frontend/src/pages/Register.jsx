import React from 'react';
import Card from "../components/Card";
//sample query data; actual data will be fetched from canister
let queryData = [
  {
    hackathon_name: "BlockBash '23",
    event_img_url: "hackabash_logo.png",
    location: "Bengaluru",
    hackathon_details: "Bangalore, often referred to as the 'Silicon Valley of India,' boasts a plethora of world-class colleges and educational institutions. Renowned for its vibrant academic atmosphere, the city offers a diverse range of colleges spanning various disciplines. Institutions like the Indian Institute of Science (IISc) and Indian Institute of Technology (IIT) Bangalore are globally recognized for their research and innovation. Bangalore's colleges also excel in fields like engineering, management, medicine, and liberal arts, attracting students from across India and beyond. The city's cosmopolitan culture, excellent faculty, and cutting-edge infrastructure make it a prime destination for higher education and professional growth.",
    hackathon_start: "21 June, 2023",
    organiser_name: "Dfinity Foundation",
    id: 0,
  },
  {
    hackathon_name: "HackFest ISM '23",
    event_img_url: "hackabash_logo.png",
    location: "Dhanbad",
    hackathon_details:
      "The Indian Institute of Technology (Indian School of Mines) constituted under Institute of Technology Act, 1961 is administered through IIT Council-the apex body, Government of India under the Chairmanship of Honourable Minister, MoE for uniform and smooth governance of Pan-IIT in our country.To be a nationally and internationally acclaimed premier institution of higher technical and scientific education with social commitment having an ethos for intellectual excellence, where initiative is nurtured, where new ideas, research and scholarship flourish, where intellectual honesty is the norm and from which will emerge the leaders and innovators of tomorrow in the realm of technology.",
    hackathon_start: "12 Dec, 2023",
    organiser_name: "Crewsphere",
    id: 1,
  },
  {
    hackathon_name: "Hackabash DecHack",
    event_img_url: "hackabash_logo.png",
    location: "Virtual",
    hackathon_details: "It is a highly inclusive and diverse event that welcomes participants from all backgrounds, colleges, professions, and interests. It serves as a platform for people to come together, share knowledge, and engage in meaningful discussions. Whether you're a student, professional, enthusiast, or someone simply looking to explore new ideas, this event offers something for everyone. Join us to connect with like-minded individuals, attend enlightening sessions, and be a part of a vibrant community. No matter your field of interest or expertise, you're invited to be a part of this enriching experience.",
    hackathon_start: "11 Jan, 2024",
    organiser_name: "Hackabash Co.",
    id: 2,
  },
];

const Register = () => {
  return (
    <>
      <div className="cards">
        {queryData.map((ele, ind) => {
          return(<Card
            key={ind}
            hackathonName={ele.hackathon_name}
            eventImgUrl={ele.event_img_url}
            location={ele.location}
            hackathonDetails={ele.hackathon_details}
            hackathonStart={ele.hackathon_start}
            organiserName={ele.organiser_name}
            eventId={ele.id}
          />)
        })}
      </div>
    </>
  );
};

export default Register;
