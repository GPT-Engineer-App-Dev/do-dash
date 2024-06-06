import { useState } from "react";
import { 
  Box, 
  Button, 
  Checkbox, 
  Container, 
  Flex, 
  Heading, 
  IconButton, 
  Input, 
  List, 
  ListItem, 
  Text, 
  VStack 
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="xl">Todo App</Heading>
        <Flex w="100%" maxW="md">
          <Input 
            placeholder="Add a new todo" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            mr={2}
          />
          <Button onClick={addTodo} colorScheme="teal">Add</Button>
        </Flex>
        <List spacing={3} w="100%" maxW="md">
          {todos.map((todo, index) => (
            <ListItem 
              key={index} 
              display="flex" 
              alignItems="center" 
              justifyContent="space-between" 
              bg={todo.completed ? "green.100" : "gray.100"} 
              p={2} 
              borderRadius="md"
            >
              <Checkbox 
                isChecked={todo.completed} 
                onChange={() => toggleTodo(index)}
              >
                <Text as={todo.completed ? "s" : "span"} ml={2}>
                  {todo.text}
                </Text>
              </Checkbox>
              <IconButton 
                aria-label="Delete todo" 
                icon={<FaTrash />} 
                size="sm" 
                colorScheme="red" 
                onClick={() => deleteTodo(index)}
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;