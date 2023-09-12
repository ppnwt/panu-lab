import "./App.css";
import { Text, Divider, useColorMode, FormControl, FormLabel, Switch, Grid, GridItem } from "@chakra-ui/react";
import Footer from "./components/layouts/Footer";

import axios from "axios";
import { useState, useEffect } from "react";

import Summary from "./features/summary/Summary";
import Experiences from "./features/experiences/Experiences";
import Bio from "./features/bio/Bio";
import Blog from "./features/blog/Blog";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const [bio, setBio] = useState([]);
  const [exp, setExp] = useState([]);
  const [blogs, setBlog] = useState([]);

  const fetchBio = async () => {
    const baseUrl = `https://node-api-vercel-six.vercel.app`;

    const expResponse = await axios.get(`${baseUrl}/experiences`);
    setExp(expResponse.data);

    const bioResponse = await axios.get(`${baseUrl}/bio`);
    setBio(bioResponse.data);

    const blogsResponse = await axios.get(`${baseUrl}/blogs`);
    setBlog(blogsResponse.data);
  };

  useEffect(() => {
    fetchBio();
  }, []);

  return (
    <div className="App">
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={4}>
          <FormLabel size={18}>Panu Lab 💻</FormLabel>
        </GridItem>
        <GridItem colStart={6} colEnd={10}>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="theme-toggle" mb="0">
              {colorMode === "light" ? "Light" : "Dark"} Mode
            </FormLabel>
            <Switch
              id="theme-toggle"
              isChecked={colorMode === "dark" ? true : false}
              colorScheme="teal"
              onChange={toggleColorMode}
            />
          </FormControl>
        </GridItem>
      </Grid>
      <Text fontSize="sm">Keep forward !</Text>
      <Divider />
      <Bio bioData={bio} />
      <Blog blogsData={blogs} />
      <Summary />
      <Experiences expData={exp} />
      <Footer />
    </div>
  );
}

export default App;
