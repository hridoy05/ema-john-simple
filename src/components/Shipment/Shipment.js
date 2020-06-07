import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useAuth } from '../Login/useAuth';

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => { console.log(data) }

   const auth = useAuth();

  return (
    <form className="shipForm" onSubmit={handleSubmit(onSubmit)}>
    
      
      <input name="name" defaultValue={auth.user.name} ref={register({ required: true })} placeholder="name"/>
      {errors.name && <span>name is required</span>}
        
      <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="email" />
      {errors.email && <span>email is required</span>}
      

      <input name="AddressLine1" ref={register({ required: true })} placeholder="AddressLine1" />
      {errors.AddressLine1 && <span>AddressLine1 is required</span>}
      

      <input name="AddressLine2" ref={register({ required: true })} placeholder="AddressLine2" />
      {errors.AddressLine2 && <span>AddressLine2 is required</span>}
      

      <input name="city" ref={register({ required: true })} placeholder="city"/>
      {errors.city && <span>city is required</span>}
      

      <input name="country" ref={register({ required: true })} placeholder="country" />
      {errors.country && <span>country is required</span>}
      

      <input name="zipcode" ref={register({ required: true })} placeholder="zipcode" />
      {errors.zipcode && <span>zipcode is required</span>}
      
      
      <input type="submit" />
    </form>
  )
};

export default Shipment;