import './App.css'
import { Form, Formik } from 'formik'
import Navigation from './Components/features/control/Navigation';
import { validationSchema } from './Components/features/control/Validation';

const initialValue = {
  username: '',
  password: '',
  streetAdress:'',
  city:'',
  state:'',
  zipcode:'',
  fullname:'',
  email:'',
  datebirth:'',
};

function App() {
  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 1));
        }}
      >
        <Form>
          <Navigation />
        </Form>
      </Formik>
    </>
  )
}

export default App