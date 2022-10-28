import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Field, FormikProvider, useFormik } from "formik";
import React from "react";

import { CreateQuoteDTO } from "../../../../services/DTO/create-quote.dto";
import QuotesService from "../../../../services/quotes.service";

const SelectLocation = () => {
  return (
    <>
      <option value="place 1">place 1</option>
      <option value="place 2">place 2</option>
      <option value="place 3">place 3</option>
    </>
  );
};

const SelectTransportation = () => {
  return (
    <>
      <option value="CAR">Car</option>
      <option value="PLANE">Plane</option>
      <option value="TELEPORT">Teletransport</option>
    </>
  );
};

const emptyForms = {
  departure_loc: "",
  destination_loc: "",
  departure_date: new Date(),
  return_date: new Date(),
  traveler_qty: 1,
  transportation: "",
  contact_info: "",
};

const CreateQuoteCard = () => {
  const toast = useToast();
  const quotesService = new QuotesService();

  const queryClient = useQueryClient();
  const newQuoteMutation = useMutation(async (newQuote: CreateQuoteDTO) => {
    quotesService.createQuote(newQuote);
    //return queryClient.invalidateQueries(["quotes"]);
  });
  const formik = useFormik({
    initialValues: {
      ...emptyForms,
    },
    onSubmit: async (values) => {
      try {
        const fixedNewQuote = { ...values, price: 2000, status: "OPEN" };
        await newQuoteMutation.mutateAsync(fixedNewQuote);
        formik.resetForm();
        toast({
          position: "bottom",
          status: "success",
          title: "created new quote",
          isClosable: true,
        });
      } catch (error: any) {
        toast({
          position: "bottom",
          status: "error",
          title: `${error.data?.message || error.message}`,
        });
      }
    },
  });
  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <Grid
          gap={3}
          pt={3}
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(2,1fr)"
        >
          <GridItem>
            <Field
              as={Select}
              id="departure_loc"
              name="departure_loc"
              placeholder="FROM"
              value={formik.values.departure_loc}
              onChange={formik.handleChange}
            >
              <SelectLocation />
            </Field>
          </GridItem>
          <GridItem>
            <Field
              as={Select}
              id="destination_loc"
              name="destination_loc"
              placeholder="DESTINATION"
              value={formik.values.destination_loc}
              onChange={formik.handleChange}
            >
              <SelectLocation />
            </Field>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel htmlFor="email">Departure date</FormLabel>
              <Field
                as={Input}
                placeholder="DEPART DATE"
                id="departure_date"
                name="departure_date"
                type="date"
                value={formik.values.departure_date}
                onChange={formik.handleChange}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <Field
              as={Input}
              label="return date"
              placeholder="RETURN DATE"
              id="return_date"
              name="return_date"
              type="date"
              value={formik.values.return_date}
              onChange={formik.handleChange}
            />
          </GridItem>
          <GridItem>
            <Field
              as={Input}
              id="traveler_qty"
              name="traveler_qty"
              placeholder="QTY OF PEOPLE"
              value={formik.values.traveler_qty}
              onChange={formik.handleChange}
            />
          </GridItem>
          <GridItem>
            <Field
              as={Select}
              id="transportation"
              name="transportation"
              placeholder="TRANSPORTATION"
              value={formik.values.transportation}
              onChange={formik.handleChange}
            >
              <SelectTransportation />
            </Field>
          </GridItem>
          <GridItem>
            <Field
              as={Input}
              placeholder="CONTACT INFO"
              id="contact_info"
              name="contact_info"
              value={formik.values.contact_info}
              onChange={formik.handleChange}
            />
          </GridItem>
          <GridItem>
            <Button type="submit">boom</Button>
          </GridItem>
        </Grid>
      </form>
    </FormikProvider>
  );
};

export default CreateQuoteCard;
