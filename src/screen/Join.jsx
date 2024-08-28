import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config'; // Import Firestore
import { collection, addDoc } from 'firebase/firestore';
import '../assets/css/join.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg from '../assets/img/bg-login.png';

function Join() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const goBackClicked = () => {
    navigate('/');
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading indicator
    try {
      await addDoc(collection(db, 'members'), {
        name: name,
        email: email,
        phone: phone,
        createdAt: formatDate(new Date()), // Format date
      });
      console.log('Form submitted and data saved to Firestore');
      setName('');
      setEmail('');
      setPhone('');
      toast.success(`Joined Successfully.`);
        setTimeout(() => {
            navigate('/'); // Navigate after 2 seconds
        }, 1000);
    } catch (error) {
      console.error('Error adding document: ', error);
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <div className="container1">
      <div className="login__content1">
        <img src={bg} alt="login image" className="login__img1" />

        <form action="" className="login__form1" onSubmit={handleSubmit}>
          <div>
            <h1 className="login__title1">
              <span>Become a</span> Member
            </h1>
            <p className="login__description1">
              Please enter your details.
            </p>
          </div>
          
          <div>
            <div className="login__inputs1">
              <div>
                <label htmlFor="input-name" className="login__label1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  required
                  className="login__input1"
                  id="input-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="input-email" className="login__label1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="login__input1"
                  id="input-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="input-phone" className="login__label1">Phone</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  required
                  className="login__input1"
                  id="input-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="login__buttons1">
              <button type="submit" className="login__button1">
                {loading ? (
                  'Loading..' // Show spinner
                ) : (
                  'Register'
                )}
              </button>
            </div>

            <a onClick={goBackClicked} style={{ cursor: 'pointer' }} className="login__forgot1">Go back</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Join;
