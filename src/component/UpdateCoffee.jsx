import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, teast, category, details, photoUrl} = coffee;


      const handleUpdateCoffe =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const teast = form.teast.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;
 
        const newCoffee = {name, quantity, supplier, teast, category, details, photoUrl}
        
 
     //    send data to server
     fetch(`http://localhost:5000/coffee/${_id}`, {
         method: 'PuT',
         headers: {
             'content-type' : 'application/json',
         },
         body: JSON.stringify(newCoffee)
     })
     .then(res => res.json())
     .then(data => {
         console.log(data)
         if (data.modifiedCount > 0) {
             Swal.fire({
   title: 'Success!',
   text: 'coffee updated successfully!',
   icon: 'success',
   confirmButtonText: 'Cool'
 })
         }
     })
        
     }
 



    return (
        <div className="mx-auto bg-base-300 py-5">
        <h3 className="text-3xl font-extrabold">Update Coffee : {name}</h3>
        
  
  
  <form onSubmit={handleUpdateCoffe}>
      {/* form name and quantyti row */}
        <div className="md:flex justify-between md:w-1/2 w-full mx-auto px-10 py-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Coffee Name</span>
          </label>
          <label className="input-group">
          
            <input
              type="text"
              name="name"
              placeholder="coffee Name"
              className="input input-bordered"
              defaultValue={name}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Avalable quantity</span>
          </label>
          <label className="input-group">
          
            <input
              type="text"
              name="quantity"
              placeholder="available quantity"
              className="input input-bordered"
              defaultValue={quantity}
            />
          </label>
        </div>
        </div>
      {/* form suppliyar row */}
        <div className="md:flex justify-between md:w-1/2 w-full mx-auto bg-base-300 px-10 py-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Suplier</span>
          </label>
          <label className="input-group">
          
            <input
              type="text"
              name="supplier"
              placeholder="Supplier Name"
              className="input input-bordered"
              defaultValue={supplier}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Teast</span>
          </label>
          <label className="input-group">
          
            <input
              type="text"
              name="teast"
              placeholder="Teast"
              className="input input-bordered"
              defaultValue={teast}
            />
          </label>
        </div>
        </div>
      {/* form catagory and details row */}
        <div className="md:flex justify-between md:w-1/2 w-full mx-auto bg-base-300 px-10 py-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">category</span>
          </label>
          <label className="input-group">
          
            <input
              type="text"
              name="category"
              placeholder="category"
              className="input input-bordered"
              defaultValue={category}
            />
          </label>
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">details</span>
          </label>
          <label className="input-group">
          
            <input
              type="text"
              name="details"
              placeholder="details"
              className="input input-bordered"
              defaultValue={details}
            />
          </label>
        </div>
        </div>
        {/* form photo url row */}
      <div className="w-1/2 mx-auto bg-base-300 px-10 py-5">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <label className="input-group">
          
            <input
              type="text"
              name="photoUrl"
              placeholder="Photo Url"
              className="input input-bordered"
              defaultValue={photoUrl}
            />
          </label>
        </div>
      </div>
      <input type="submit" className="btn" value='update coffee' />
      
      
  </form>
      </div>
    );
};

export default UpdateCoffee;