import { styled, Box, Typography } from "@mui/material";

const Image = styled(Box)`
  width: 100%;
  background: url(https://ik.imagekit.io/w8r14tqb9/laptop.png?updatedAt=1715147204086)
    center/55%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  width: 100%;
  font-family: raleway, sans-serif;
  background-size: contain;
  background-position-x: 750px;
  background-position-y: 15px;
`;

const Heading = styled(Typography)`
  font-size: 60px;
  color: #3d1951;
  line-height: 1;
  font-family: cursive;
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  font-family: cursive;
  color: #3d1951;
`;

const Banner = () => {
  return (
    <Image>
      <Heading>DEVLOG</Heading>
      <SubHeading>Write what you think</SubHeading>
    </Image>
  );
};

export default Banner;
