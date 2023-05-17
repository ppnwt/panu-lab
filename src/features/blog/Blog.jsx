import {
  Flex,
  Box,
  Wrap,
  WrapItem,
  VStack,
  Heading,
  Button,
  useColorModeValue,
  useControllableState,
  Spinner,
} from "@chakra-ui/react";

// import { blogsAll } from "../../utils/api/blogAll";
import BlogItems from "./BlogItems";
import { _ } from "lodash";

export default function Blog({ blogsData }) {
  const blogsFiltered = blogsData.filter((blog) => blog.id > blogsData.length - 3);
  const [blogsList, setBlogs] = useControllableState({ defaultValue: blogsData });
  const [full, isFull] = useControllableState({ defaultValue: false });

  const handleLoadMore = () => {
    if (full) {
      isFull(false);
    } else {
      setBlogs(blogsData);
      isFull(true);
    }
  };

  return (
    <>
      {_.size(blogsFiltered) != 0 ? (
        <Heading as="h3">Blog</Heading>
      ) : (
        <div style={{ display: `flex`, alignItems: `center`, justifyContent: "center" }}>
          <Spinner />
        </div>
      )}
      <VStack paddingTop="20px" spacing="2" alignItems="flex-start">
        <Wrap spacing="30px">
          <WrapItem>
            <Flex>
              <Box ml="1">
                {!full
                  ? blogsFiltered.map((data) => <BlogItems key={data.id} data={data} />)
                  : blogsList.map((data) => <BlogItems key={data.id} data={data} />)}
              </Box>
            </Flex>
          </WrapItem>
        </Wrap>
      </VStack>
      <VStack paddingTop="20px" spacing="2" alignItems="center">
        {blogsFiltered.length != 0 ? (
          <Button
            px={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            onClick={handleLoadMore}
          >
            {full ? "See less" : "See all"}
          </Button>
        ) : (
          <></>
        )}
      </VStack>
    </>
  );
}
