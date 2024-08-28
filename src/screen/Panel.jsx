import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config'; // Import Firestore configuration
import '../assets/css/panel.css'; // Ensure this CSS file is updated
import ScrollReveal from 'scrollreveal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Panel() {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Show loading indicator
            try {
                const querySnapshot = await getDocs(collection(db, 'members'));
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setMembers(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            } finally {
                setLoading(false); // Hide loading indicator
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 300,
            reset: true,
        });

        sr.reveal('.programs__container', {
            interval: 100,
        });
    }, []);

    const handleRemove = async (id, name) => {
        if (window.confirm(`Are you sure you want to remove ${name}?`)) {
            try {
                await deleteDoc(doc(db, 'members', id));
                setMembers(members.filter(member => member.id !== id));
                toast.success(`${name} has been removed.`);
            } catch (error) {
                console.error('Error removing document: ', error);
                toast.error('Error removing member.');
            }
        }
    };

    return (
        <section className="programs section" id="programs">
            <h2 className="section__title">
                OUR MEMBERS
                <span className="member-count">Total Members: {members.length}</span>
            </h2>
            {loading ? (
                <p className="loading">Loading...</p>
            ) : members.length === 0 ? (
                <p className="no-members">No members</p>
            ) : (
                <div className="programs__container container grid">
                    {
                        members.map((item) => (
                            <>
                            <div key={item.id} className="programs__item">
                                <h3 className="programs__title">Name : {item.name}</h3>
                                <p className="programs__description">
                                    Phone no : {item.phone} <br />
                                    Email : {item.email} <br />
                                    Joined : {item.createdAt} <br />
                                    <br />
                                    <button 
                                        className='button' 
                                        onClick={() => handleRemove(item.id, item.name)}
                                    >
                                        Remove
                                    </button>
                                </p>
                            </div>
                            </>
                        ))
                    }
                </div>
            )}
            <ToastContainer />
        </section>
    );
}

export default Panel;
