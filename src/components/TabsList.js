import React, { useState } from "react";
import Listing from "./Listing";
import CustomButton from "./CustomButton";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Box,
} from "@chakra-ui/react";

const TabsList = ({ listings }) => {
  const statusTabs = ["All", "Listed", "Unlisted", "In Progress"];
  const [selectedTab, setSelectedTab] = useState("All");

  const filteredListings = (status) => {
    if (status === "All") {
      return listings;
    }
    return listings.filter((listing) => listing.status === status);
  };

  return (
    <Tabs position="relative" variant="unstyled" width="100%">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        borderBottom="solid"
        borderColor="gray.100"
      >
        <TabList>
          {statusTabs.map((status) => (
            <Tab
              key={status}
              fontWeight={selectedTab === status ? "bold" : "normal"}
              onClick={() => setSelectedTab(status)}
              width="120px"
              height="80px"
              transition="transform 0.3s, font-weight, .3s ease"
              _hover={{
                transform: "scale(1.1)",
              }}
            >
              {status}
            </Tab>
          ))}
        </TabList>
        <CustomButton label={"+ New Listing"} />
      </Box>
      <TabIndicator mt="-1.5px" height="2px" bg="black" borderRadius="1px" />
      <TabPanels>
        {statusTabs.map((status) => (
          <TabPanel key={status}>
            {filteredListings(status).map((listing) => (
              <Listing name={listing.name} status={listing.status} />
            ))}
          </TabPanel>
        ))}
      </TabPanels>
      <style jsx global>{`
        @media (max-width: 1000px) {
          .chakra-tabs__tab {
            width: auto !important;
          }
        }
      `}</style>
    </Tabs>
  );
};

export default TabsList;
