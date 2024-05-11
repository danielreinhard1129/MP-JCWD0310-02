import React from 'react';

const Footer = () => {
  return (
    <div className="md:px-20 gap-4 px-10 md:pt-10 pt-10 md:pb-8 pb-4 w-full bg-indigo-950 flex md:flex-row-reverse flex-col md:justify-between items-center">
      <h1 className="text-white text-xs text-center">
        © 2024 TuneTix. All Rights Reserved. Use of this website signifies
        your agreement to our User Agreement, Privacy Notice and Cookie Notice.
        You are buying tickets from a third party; TuneTix is not the ticket
        seller. Prices are set by sellers and may be above face value. User
        Agreement change notifications Do Not Share My Personal Information/Your
        Privacy Choices
      </h1>
    </div>
  );
};

export default Footer;
