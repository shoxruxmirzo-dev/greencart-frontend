import { useEffect, useState } from 'react';
import { useAppContext } from '../../store/AppContext';

const SellerLogin = () => {
  const { isSeller, setIsSeller, navigate } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIsSeller(true);
  };

  useEffect(() => {
    if (isSeller) {
      navigate('/seller');
    }
  }, [isSeller]);

  return (
    !isSeller && (
      <form
        className="min-h-screen flex items-center text-sm text-gray-600"
        onSubmit={onSubmitHandler}
      >
        <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200">
          <p className="m-auto text-2xl font-medium">
            <span className="text-primary">Seller</span>
            Login
          </p>
          <div className="w-full">
            <p>Email</p>
            <input
              className="mt-1 p-2 w-full rounded border border-gray-200 outline-primary"
              type="email"
              placeholder="enter you email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="w-full">
            <p>Password</p>
            <input
              className="mt-1 p-2 w-full rounded border border-gray-200 outline-primary"
              type="password"
              placeholder="enter you password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button className="py-2 w-full bg-primary hover:bg-primary-dull text-white rounded-md cursor-pointer">
            Login
          </button>
        </div>
      </form>
    )
  );
};

export default SellerLogin;
