import React, { useState } from 'react';
import { assets } from '../assets/assets';

const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition"
    type={type}
    name={name}
    placeholder={placeholder}
    value={address[name]}
    onChange={handleChange}
    required
  />
);

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-16 pb-16">
      <p className="text-2xl md:text-3xl text-gray-500">
        Add Shipping <span className="font-semibold text-primary">Address</span>
      </p>
      <div className="mt-10 flex flex-col-reverse md:flex-row justify-between">
        <div className="flex-1 max-w-md">
          <form className="mt-6 space-y-3 text-sm" onSubmit={onSubmitHandler}>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                type="text"
                name="firstName"
                placeholder="First Name"
                address={address}
                handleChange={handleChange}
              />
              <InputField
                type="text"
                name="lastName"
                placeholder="Last Name"
                address={address}
                handleChange={handleChange}
              />
            </div>
            <InputField
              type="email"
              name="email"
              placeholder="Email address"
              address={address}
              handleChange={handleChange}
            />
            <InputField
              type="text"
              name="street"
              placeholder="Street"
              address={address}
              handleChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-4">
              <InputField
                type="text"
                name="city"
                placeholder="City"
                address={address}
                handleChange={handleChange}
              />
              <InputField
                type="text"
                name="state"
                placeholder="State"
                address={address}
                handleChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                type="number"
                name="zipcode"
                placeholder="Zip code"
                address={address}
                handleChange={handleChange}
              />
              <InputField
                type="text"
                name="country"
                placeholder="Country"
                address={address}
                handleChange={handleChange}
              />
            </div>
            <InputField
              type="text"
              name="phone"
              placeholder="Phone"
              address={address}
              handleChange={handleChange}
            />
            <button className="mt-6 w-full py-3 bg-primary hover:bg-primary-dull text-white transition uppercase cursor-pointer">
              Save address
            </button>
          </form>
        </div>
        <img src={assets.add_address_iamge} alt="address" className="mb-16 md:mr-16 md:mt-0" />
      </div>
    </div>
  );
};

export default AddAddress;
