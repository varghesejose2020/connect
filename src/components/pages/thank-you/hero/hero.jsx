import React from 'react';

import Button from 'components/shared/button/button';
import LINKS from 'constants/links';
import DiscordIcon from 'icons/discord.inline.svg';
import TwitterIcon from 'icons/twitter.inline.svg';
import bgLines from 'images/home/hero/bg-lines.svg';

const TITLE = 'Thank you!';
const DESCRIPTION = (
  <>
    We are glad that you decided to take part in our Hackathon!
    <br />
    To keep track of your project's status, you can visit your profile.
  </>
);

const Hero = () => (
  <section className="safe-paddings relative h-screen min-h-[600px]">
    <div className="container relative z-10 flex h-full flex-col items-center justify-center">
      <h1 className="font-mono text-72 font-bold leading-denser lg:text-48 md:text-40 xs:text-32">
        {TITLE}
      </h1>
      <p className="mt-5 text-center text-24 md:text-20 sm:text-16">{DESCRIPTION}</p>
      <Button className="mt-10 xs:text-12" to="/" size="md" theme="primary">
        <span className="z-10">Back to homepage</span>
      </Button>

      <div className="absolute bottom-20 md:bottom-12">
        <h2 className="font-mono text-center text-16 font-medium uppercase">Let’s connect</h2>
        <div className="flex items-center justify-center space-x-8">
          <a
            className="group mt-5 cursor-pointer"
            {...LINKS.twitter}
            rel="noreferrer"
            aria-label="Link to our Twitter"
          >
            <TwitterIcon className="h-[26px] transition-opacity duration-200 group-hover:opacity-80" />
          </a>
          <a
            className="group mt-5 cursor-pointer"
            {...LINKS.discord}
            rel="noreferrer"
            aria-label="Link to our Discord"
          >
            <DiscordIcon className="h-[26px] transition-opacity duration-200 group-hover:opacity-80" />
          </a>
        </div>
      </div>
    </div>

    <span
      className="absolute left-1/2 top-1/2 -z-10 h-full w-full max-w-[1325px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#000000_45.83%,_rgba(0,0,0,0)_100%)]"
      aria-hidden
    />
    <img
      className="absolute top-1/2 -z-20 mt-[33px] w-full -translate-y-1/2"
      src={bgLines}
      width={1920}
      height={580}
      loading="eager"
      alt=""
      aria-hidden
    />
  </section>
);

export default Hero;
