import React, { useState, useEffect, useRef } from "react";
import { Input, List, ListItem, Heading, useDisclosure } from "@chakra-ui/react";
import "./Index.css";

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
        <div className="command-palette-overlay">
          <div className="command-palette" ref={searchRef}>
            <Heading className="command-palette-heading">Command Palette</Heading>
            <Input className="command-palette-input" placeholder="Search commands..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} autoFocus />
            <List className="command-palette-list">
              {filteredCommands.map((command) => (
                <ListItem key={command.id} className="command-palette-item" onClick={() => handleCommandClick(command)}>
                  {command.name}
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
