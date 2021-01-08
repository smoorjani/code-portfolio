import { Button, Flex, Text } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { InputField } from "../components/InputField";
import React, { useState } from "react";
import { Container } from "../components/Container";
import { CTA } from "../components/CTA";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Hero } from "../components/Hero";
import { NavButton } from "../components/NavButton";
import { Wrapper } from "../components/Wrapper";
import axios from "axios";

const About = () => {
  const [answer, setAnswer] = useState("");

  return (
    <Container height="100vh">
      <NavButton />

      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Hero title={"About Me"} />

        <Wrapper variant="large">
          <Formik
            initialValues={{ question: "" }}
            onSubmit={async (values) => {
              axios
                .post(`http://127.0.0.1:5000/get-question`, {
                  question: values["question"],
                })
                .then((res) => {
                  console.log(res);
                  setAnswer(res.data["answer"]);
                });
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <InputField
                  name="question"
                  placeholder="Ask your question here..."
                  textarea={true}
                  width="100%"
                />
                <Button
                  mt={4}
                  width="100%"
                  isLoading={isSubmitting}
                  colorScheme="teal"
                  type="submit"
                >
                  Submit
                </Button>
                {answer ? (
                  <Text mt={4} fontSize="2xl">
                    {answer}
                  </Text>
                ) : null}
              </Form>
            )}
          </Formik>
        </Wrapper>
      </Flex>

      <DarkModeSwitch />
      <CTA />
    </Container>
  );
};

export default About;
