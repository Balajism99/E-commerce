import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProductCategories } from '../actions/productaction';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

export default function SearchBox(props) {
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  const dispatch = useDispatch();
  const productCategoryList = useSelector((state) => state.productCategoryList);
 const {
   loading: loadingCategories,
   error: errorCategories,
   categories,
 } = productCategoryList;
 useEffect(() => {
   dispatch(listProductCategories());
 }, [dispatch]);
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="row1">
      <div className="dropdown-cate">
      <i class="fa fa-2x fa-dropbox"></i>
      <ul className="dropdown-cate-content">
      {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              categories.map((c) => (
                <li  key={c}>
                  <Link className="signin"
                    to={`/search/category/${c}`}
                    
                  >
                    {c}
                  </Link>
                </li>
              ))
            )}
      </ul>
      </div>
        <input
          type="text"
          placeholder="Search products"
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button className="searchicon" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}
