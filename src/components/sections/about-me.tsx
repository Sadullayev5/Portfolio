import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex align-middle w-full flex-col justify-between gap-12 md:flex-row">
        

        {/* Content */}
        <div className="flex w-full flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
          I'm a junior front-end developer specializing in React and JavaScript. Although I've just started my programming journey and don't have much experience yet, I'm passionate about web development and eager to learn and grow. My skills include JavaScript, TypeScript, Next.js, React, Redux Toolkit, TailwindCSS, and Ant Design, which I use to build web applications.
          </Typography>
          <Typography>
          I’m currently studying at Tashkent State University of Economics, so I can’t commit to full-time work, but I’m available for online or part-time positions. I enjoy working in a team and have good teamwork skills, which I always prioritize.
          </Typography>
          <Typography>
          At the moment, I don’t have any active projects, but in a few years, I definitely see myself thriving in the development field, continuing to take on exciting challenges and projects.
          </Typography>
          
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
