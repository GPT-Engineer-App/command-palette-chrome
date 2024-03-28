import React, { useState, useEffect, useRef } from "react";
import { Box, Input, List, ListItem, Heading, useDisclosure } from "@chakra-ui/react";

const commands = [
  { id: 1, name: "Command 1" },
  { id: 2, name: "Command 2" },
  { id: 3, name: "Command 3" },
];

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef();

  const { onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "p") {
        setIsOpen(true);
      }
    });
  }, []);

  const filteredCommands = commands.filter((command) => command.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleCommandClick = (command) => {
    console.log(`Executing command: ${command.name}`);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <Box position="fixed" top={0} left={0} right={0} bottom={0} bg="rgba(0, 0, 0, 0.5)" zIndex={9999} display="flex" justifyContent="center" alignItems="start" p={4}>
          <Box bg="white" p={4} borderRadius="md" boxShadow="lg" width="100%" maxWidth="400px" ref={searchRef}>
            <Heading size="lg" mb={4}>
              Command Palette
            </Heading>
            <Input placeholder="Search commands..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} autoFocus />
            <List mt={4}>
              {filteredCommands.map((command) => (
                <ListItem key={command.id} onClick={() => handleCommandClick(command)} cursor="pointer" _hover={{ bg: "gray.100" }} p={2}>
                  {command.name}
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Index;
