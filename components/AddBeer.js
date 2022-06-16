import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

export default function AddNewBrew() {
  const beerValidation = yup.object({
    name: yup.string().required().min(4),
    country: yup.string().required().min(2),
    type: yup.string().required().min(2),
    picture: yup.string().required().min(10),
  });

  const addIt = (brew) => {
    brew.id = Math.random().toString();
  };
  return (
    <View>
      <Formik
        initialValues={{ name: "", country: "", type: "", picture: "", id: "" }}
        validationSchema={beerValidation}
        onSubmit={(values, actions) => {
          actions.resetForm();
          alert("You added a new beer!");
          addIt(values);
          fetch("http://192.168.0.33:3000/api/beers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: values.name,
              country: values.country,
              picture: values.picture,
              type: values.type,
              id: values.id,
            }),
          });

          console.log(values);
        }}
      >
        {(props) => (
          <View style={styles.formStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor="yellow"
              placeholder="Name of beer"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
              onBlur={props.handleBlur("name")}
            />
            <Text style={styles.textStyle}>
              {props.touched.name && props.errors.name}
            </Text>
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor="yellow"
              placeholder="Name of country"
              onChangeText={props.handleChange("country")}
              value={props.values.country}
              onBlur={props.handleBlur("country")}
            />
            <Text style={styles.textStyle}>
              {props.touched.country && props.errors.country}
            </Text>
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor="yellow"
              placeholder="Link to picture ex.(https://www.systembol...)"
              onChangeText={props.handleChange("picture")}
              value={props.values.picture}
              onBlur={props.handleBlur("picture")}
            />
            <Text style={styles.textStyle}>
              {props.touched.picture && props.errors.picture}
            </Text>
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor="yellow"
              placeholder="Type of beer (Lager, IPA etc)"
              onChangeText={props.handleChange("type")}
              value={props.values.type}
              onBlur={props.handleBlur("type")}
            />
            <Text style={styles.textStyle}>
              {props.touched.type && props.errors.type}
            </Text>
            <TextInput
              placeholder="Leave this out please"
              onChangeText={props.handleChange("id")}
              value={props.values.id}
            />
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={props.handleSubmit}
              >
                <Text style={styles.textStyle}>Add new beer!</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  formStyle: {
    flex: 1,
    backgroundColor: "black",
    minHeight: 800,
  },
  inputStyle: {
    color: "yellow",
    margin: 25,
    borderWidth: 1,
    borderColor: "yellow",
  },
  buttonStyle: {
    alignItems: "center",
    width: 150,
    height: 30,
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    marginTop: 5,
  },
  container: {
    alignItems: "center",
  },
});
