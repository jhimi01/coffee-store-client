import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
 
    const {_id, name, quantity, supplier, teast, category, details, photoUrl} = coffee;


    const handleDelete =(_id)=>{
  console.log(_id)
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
    fetch(`http://localhost:5000/coffee/${_id}`, 
    {
        method: 'DELETE',
    }
    )
    .then(res => res.json())
    .then(data => {
if (data.deletedCount > 0) {
        Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      console.log(data)
      const remaining = coffees.filter(cof => cof._id !== _id);
      setCoffees(remaining)
}
        
    })
    }
  })
    }




    return (
        <div className="card card-compact w-96 bg-slate-700 shadow-xl">
  <figure><img src={photoUrl} alt="Shoes" /></figure>
  <div className="flex justify-between">
  <div>
    <h2 className="card-title">{name}!</h2>
  <p>details: {details}</p>
    <p>quantity: {quantity}</p>
   <p>supplier: {supplier}</p>
    <p>teast: {teast}</p>
    <p>category: {category}</p>
  </div>
    <div className="card-actions justify-end">
    <div className="btn-group btn-group-vertical space-y-5">
  <button className="btn btn-active">view</button>
  <Link to={`/updatecoffee/${_id}`}>
  <button className="btn">Edit</button>
  </Link>
  <button onClick={()=>handleDelete(_id)} className="btn">Delete</button>
</div>
    </div>
  </div>
</div>
    );
};

export default CoffeeCard;