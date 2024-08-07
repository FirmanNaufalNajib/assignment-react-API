import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import UsersItem from '../components/UsersItem';
import Navbar from '../components/Navbar';
import './pages.css';

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2,
  });

  const getUsersData = useCallback(() => {
    axios
      .get(`https://reqres.in/api/users?page=${pagination.page}`)
      .then((res) => {
        setUsersData(res.data.data);
        setPagination({
          page: res.data.page,
          per_page: res.data.per_page,
          total: res.data.total,
          total_pages: res.data.total_pages,
        });
      })
      .catch((err) => console.log(err));
  }, [pagination.page]);

  const handleBack = () => {
    setPagination((prev) => ({
      ...prev,
      page: prev.page - 1,
    }));
  };

  const handleNext = () => {
    setPagination((prev) => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  useEffect(() => {
    getUsersData();
  }, [getUsersData]);

  return (
    <>
      <Navbar />
      <div className="users-list">
        {usersData.map((item) => (
          <div className="user-card" key={item.id}>
            <UsersItem
              first_name={item.first_name}
              last_name={item.last_name}
              avatar={item.avatar}
              email={item.email}
            />
            <Link to={`/users/${item.id}`}>
              <button className="detail-button">Detail</button>
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="page-button" onClick={handleBack} disabled={pagination.page === 1}>
          Back
        </button>
        <span>
          __________page {pagination.page} of {pagination.total_pages}__________
        </span>
        <button className="page-button" onClick={handleNext} disabled={pagination.page === pagination.total_pages}>
          Next
        </button>
      </div>
    </>
  );
};

export default Users;
