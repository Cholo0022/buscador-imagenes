import { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./Search.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  console.log(photos);
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
              {
                headers: {
                  Authorization:
                    "Client-ID WqCiOYIv4ytYPIJXi9TrIBtRcGQf1IOZEqJiOHMDcig",
                },
              }
            );
            const data = await response.json();
            //llamar a api unsplash
            setPhotos(data.results);
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
    </div>
  );
};

export default App;
