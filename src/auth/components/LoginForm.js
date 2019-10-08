import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = ({ errors, isEdit, touched, formTitle, isSubmitting, onSubmit, msg }) => (
  <Form>
    {msg && <small className="form-text text-mute text-right text-danger">{msg}</small>}
    <div className="form-group">
      <label>User Name</label>
      <Field type="text" name="username" className="form-control" placeholder="Enter a User Name"
        disabled={isEdit}
      />
      {touched.username && errors.username && <small className="form-text text-mute text-right text-danger">{errors.username}</small>}
    </div>
    <div className="form-group">
      <label>Password</label>
      <Field type="password" name="password" className="form-control" placeholder="Enter a Password" />
      {touched.password && errors.password && <small className="form-text text-mute text-right text-danger">{errors.password}</small>}
    </div>
    <button type="submit" disabled={isSubmitting}> Submit</button>
  </Form>
)

const LoginFormik = withFormik({
  // enableReinitialize: true,
  mapPropsToValues({ username, _id, isEdit }) {
    const fields = {
      username: username || ''
    }
    if (!isEdit) {
      fields['password'] = '';
    } else {
      fields['id'] = _id;
    }

    return fields;
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().min(4, 'Username must minimum 4 letters').required('Please enter your username'),
    password: Yup.string().min(4, 'Password must minimum 4 letters').required('Please enter your password'),

  }),

  handleSubmit(values, { resetForm, props }) {
    console.log(values, props.onSubmit);
    props.onSubmit(values);
    resetForm();
  }
})(LoginForm)

export default LoginFormik;