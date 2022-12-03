import React from "react";

import { Stack, Img, Row, Text, Column } from "components";

const MacBookPro14OnePage = () => {
  return (
    <>
      <Stack className="bg-black_900 h-[982px] mx-[auto] relative w-[100%]">
        <Stack className="absolute h-[812px] inset-x-[0] max-w-[1480px] mx-[auto] sm:px-[15px] top-[6%] w-[100%]">
          <Stack className="absolute font-nunito h-[808px] inset-[0] justify-center m-[auto] sm:w-[100%] w-[99%]">
            <Img
              src="images/img_vector2.png"
              className="absolute bottom-[0] h-[768px] left-[0] max-w-[100%] w-[10%]"
              alt="VectorTwo"
            />
            <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] right-[0] top-[0] sm:w-[100%] w-[72%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[1px] sm:mx-[0] p-[12px] md:p-[7px] sm:px-[0] sm:py-[6px] sm:w-[100%] w-[56%]">
                <Text
                  className="font-bold sm:ml-[25px] md:ml-[32px] ml-[50px] text-pink_600 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Home
                </Text>
                <Text
                  className="font-bold ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Services
                </Text>
                <Text
                  className="font-bold ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Team
                </Text>
                <Text
                  className="font-bold ml-[10px] sm:ml-[5px] md:ml-[6px] text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Testimoials
                </Text>
                <Text
                  className="font-bold ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Blog
                </Text>
                <Text
                  className="font-bold mb-[1px] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Pages
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] rounded-radius1339 sm:w-[100%] w-[16%]">
                  <Img
                    src="images/img_unsplashdosj7y.png"
                    className="flex-shrink-0 sm:h-[14px] md:h-[18px] h-[26px] max-w-[100%] rounded-radius50 sm:w-[13px] md:w-[17px] w-[26px]"
                    alt="unsplashdOsJ7Y"
                  />
                  <Text
                    className="flex-grow mt-[3px] text-white_A700"
                    as="h5"
                    variant="h5"
                  >
                    IND
                  </Text>
                </Row>
                <Text className="text-white_A700 w-[auto]" as="h5" variant="h5">
                  Sign In
                </Text>
                <Column className="bg-gradient  flex flex-col items-center sm:mx-[0] md:p-[11px] p-[17px] sm:px-[15px] sm:py-[8px] rounded-radius285 sm:w-[100%] w-[50%]">
                  <Text
                    className="mb-[3px] text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Connect Wallet
                  </Text>
                </Column>
                <Img
                  src="images/img_menu.svg"
                  className="max-w-[100%] w-[7%]"
                  alt="menu"
                />
              </Row>
            </Row>
            <Column className="absolute bottom-[9%] flex flex-col justify-center left-[4%] sm:mx-[0] sm:pl-[0] sm:pr-[15px] md:pr-[26px] pr-[41px] sm:py-[20px] md:py-[26px] py-[41px] sm:w-[100%] w-[69%]">
              <Text
                className="font-quicksand sm:mt-[27px] md:mt-[35px] mt-[54px] text-white_A700 w-[auto]"
                as="h1"
                variant="h1"
              >
                Social Media in Web3{" "}
              </Text>
              <Text
                className="font-anekbangla leading-[normal] sm:mt-[20px] md:mt-[26px] mt-[41px] not-italic text-white_A700 w-[100%]"
                as="h4"
                variant="h4"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
                <br />
                lectus magna fringilla urna, porttitor rhoncus dolor purus non
                enim praesent elementum facilisis le
                <br />
                gilla est ullamcorper eget nulla facilisi etiam dignissim diam
                quis enim lobortis scelerisque ferme
              </Text>
              <Column className="bg-gradient  flex flex-col font-nunito items-center justify-start sm:mb-[27px] md:mb-[35px] mb-[54px] sm:mt-[20px] md:mt-[26px] mt-[41px] sm:mx-[0] md:p-[13px] p-[20px] sm:px-[15px] sm:py-[10px] rounded-radius3193 sm:w-[100%] w-[18%]">
                <Text
                  className="font-medium mb-[1px] text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Let’s Dive in
                </Text>
              </Column>
            </Column>
          </Stack>
          <Text
            className="absolute font-reemkufifun left-[10%] not-italic text-white_A700 top-[1%] w-[auto]"
            as="h2"
            variant="h2"
          >
            NFT Media
          </Text>
          <Img
            src="images/img_bd864d0940980b9.png"
            className="absolute h-[53px] left-[6%] max-w-[100%] top-[0] w-[4%]"
            alt="bd864d0940980bNine"
          />
          <Img
            src="images/img_blob.svg"
            className="absolute bottom-[5%] h-[597px] max-w-[100%] right-[0] sm:w-[100%] w-[40%]"
            alt="Blob"
          />
        </Stack>
        <Img
          src="images/img_stroke.svg"
          className="absolute bottom-[25%] h-[420px] max-w-[620px] sm:px-[15px] right-[0] w-[100%]"
          alt="Stroke"
        />
        <Stack className="absolute h-[1176px] max-w-[756px] md:pb-[127px] pb-[194px] sm:pb-[98px] sm:px-[15px] w-[100%]">
          <Img
            src="images/img_backgroundgrad.png"
            className="absolute h-[982px] max-w-[100%] w-[100%]"
            alt="Backgroundgrad"
          />
          <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start left-[5%] sm:mx-[0] sm:px-[0] top-[20%] sm:w-[100%] w-[47%]">
            <Img
              src="images/img_stars.svg"
              className="max-w-[100%] md:mt-[106px] mt-[162px] sm:mt-[82px] sm:w-[100%] w-[47%]"
              alt="Stars"
            />
            <Img
              src="images/img_stars.svg"
              className="max-w-[100%] md:mb-[106px] mb-[162px] sm:mb-[82px] sm:ml-[12px] md:ml-[16px] ml-[25px] sm:w-[100%] w-[47%]"
              alt="Stars One"
            />
          </Row>
          <Img
            src="images/img_stars.svg"
            className="absolute bottom-[3%] h-[317px] max-w-[100%] right-[16%] w-[22%]"
            alt="Stars Two"
          />
          <Img
            src="images/img_stars_pink_600.png"
            className="absolute h-[317px] max-w-[100%] right-[0] top-[16%] w-[19%]"
            alt="Stars Three"
          />
        </Stack>
      </Stack>
    </>
  );
};

export default MacBookPro14OnePage;
